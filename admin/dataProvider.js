import { fetchUtils } from "react-admin";

import { stringify } from "query-string";
const httpClient = fetchUtils.fetchJson;

const dataProvider = {
  getList: (resource, params) => {
    const { page, perPage } = params.pagination;
    const query = {
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
    };
    const url = `/api/${resource}?${stringify(
      query
    )}`;
    return httpClient(url).then(({ headers, json }) => ({
      data: json.map((resource) => ({ ...resource, id: resource._id })),
      total: parseInt(headers.get("content-range").split("/").pop(), 10),
    }));
  },
};

export default dataProvider;
