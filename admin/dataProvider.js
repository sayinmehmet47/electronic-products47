import { fetchUtils } from "react-admin";

import { stringify } from "query-string";
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
      total: parseInt(headers.get("content-range").split("/").pop(), 10),
    }));
  },
  create: (resource, params) => {
    // const data = new FormData();
    // data.append("file", params.data.pictures);
    // data.append("upload_preset", "uploads");

    // try {
    //   const uploadRes = await axios.post(
    //     "https://api.cloudinary.com/v1_1/dsbyq4sj1/image/upload",
    //     data
    //   );

    //   const { url } = uploadRes.data;
    //   const newProduct = {
    //     title,
    //     desc,
    //     prices,
    //     extraOptions,
    //     img: url,
    //   };

    //   await axios.post("http://localhost:3000/api/products", newProduct);
    //   setClose(true);
    // } catch (err) {
    //   console.log(err);
    // }

    return httpClient(`api/${resource}`, {
      method: "POST",
      body: JSON.stringify(params.data),
    }).then(({json})=>({
       data: { ...params.data, id: json.id }
    }));
  },
};

export default dataProvider;
