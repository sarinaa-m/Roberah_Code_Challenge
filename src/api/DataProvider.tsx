import axiosInstance from "./configs/axiosConfigs";
import { defineCancelApiObject } from "./configs/axiosUtils";

interface RequestParams {
  [key: string]: any;
}

interface DataProviderInterface {
  [key: string]: (...args: any[]) => Promise<any>; // Add index signature
  getList<T>(resource: string, params?: RequestParams, baseUrl?: string, cancel?: boolean): Promise<T>;
}


const DataProvider: DataProviderInterface = {
  async getList<T>(resource="", params:RequestParams, baseUrl = "", cancel = false): Promise<T> {
    let url = `/${resource}`;
    if (baseUrl) {
      url = baseUrl + url;
    }
    const response = await axiosInstance.request<T>({
      url,
      method: "GET",
      params,
      signal: cancel
        ? cancelApiObject[this.getList.name].handleRequestCancellation().signal
        : undefined,
    });

    return response.data;
  },
};

// Define the cancel API object for DataProvider
const cancelApiObject = defineCancelApiObject(DataProvider);

export default DataProvider;
