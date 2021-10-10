import _axios from "axios";
import qs from "qs";
import config from "../config/API";

const axios = _axios.create({
  baseURL: config.baseURL,
  headers: {
    // ...config.defaultHeaders,
  },
});

export default class ProductsService {
  buildURL(filters, category) {
    console.log("building URL");

    let queryString = qs.stringify(filters);

    console.log(queryString);

    let url = `${category}${queryString}`;
    // console.log(encodeURI(url));
    return url;
  }

  async getProducts(filters, category) {
    console.log(filters);
    console.log(category);
    const url = this.buildURL(filters, category);

    const data = await axios.get(url);
    if (data) {
      console.log(data);
      return data;
    }

    throw Error("Could not get the products");
  }
}
