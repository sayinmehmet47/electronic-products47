import {
  CREATE,
  DELETE,
  GET_LIST,
  GET_MANY_REFERENCE,
  GET_ONE,
  UPDATE,
} from "react-admin";

const convertHTTPResponseToREST = (response, type, resource, params) => {
  const { headers, json } = response;
  switch (type) {
    case GET_LIST:
      return {
        data: json.map((resource) => ({ ...resource, id: resource._id })),
        total: parseInt(headers.get("content-range").split("/").pop(), 10),
      };
    case UPDATE:
    case DELETE:
    case GET_ONE:
      return { ...json, id: json._id };
    case CREATE:
      return { ...params.data, id: json._id };
    default:
      return json;
  }
};

export default convertHTTPResponseToREST;
