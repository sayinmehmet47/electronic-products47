import { fetchUtils } from 'react-admin';
import { useState } from 'react';
import { stringify } from 'query-string';
import axios from 'axios';
const httpClient = fetchUtils.fetchJson;

const dataProvider = {
  getList: (resource, params) => {
    const { page, perPage } = params.pagination;
    const query = {
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
    };
    const url = `/api/${resource}?${stringify(query)}`;
    return httpClient(url).then(({ headers, json }) => ({
      data: json.map((resource) => ({ ...resource, id: resource._id })),
      total: parseInt(headers.get('content-range').split('/').pop(), 10),
    }));
  },

  create: async (resource, params) => {
    console.log(params);
    const data = new FormData();
    data.append('file', params.data.files.rawFile);
    data.append('upload_preset', 'uploads');
    try {
      const uploadRes = await axios.post(
        'https://api.cloudinary.com/v1_1/dsequsn4l/image/upload',
        data
      );
      console.log(uploadRes.data.url);
      return httpClient(`api/${resource}`, {
        method: 'POST',
        body: JSON.stringify({
          title: params.data.title,
          description: params.data.description,
          price: params.data.price,
          image: uploadRes.data.url,
        }),
      }).then(({ json }) => ({
        data: { ...params.data, id: json._id },
      }));
    } catch (err) {
      console.log(err);
    }
  },

  delete: (resource, params) => {
    const url = `/api/${resource}/${params.id}`;
    return httpClient(url, { method: 'DELETE' }).then(({ json }) => ({
      data: { ...json, id: json._id },
    }));
  },

  deleteMany: (resource, params) => {
    return httpClient(`api/${resource}`, {
      method: 'DELETE',
      body: JSON.stringify(params.ids),
    }).then(({ json }) => ({
      data: [json].map((resource) => ({ ...resource, id: resource._id })),
    }));
  },
 
};

export default dataProvider;
