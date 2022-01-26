import { HTTP } from "@/utils/http";
import config from "@/utils/config";

class DetailModel extends HTTP {
  getDetail(field, id) {
    return new Promise((resolve) => {
      this.axiosPost({
        url: config.API.GET_DETAIL,
        data: {
          field,
          id,
        },
        success(data) {
          resolve({
            data,
            status: 0,
          });
        },
        error() {
          resolve({
            status: -1,
          });
        },
      });
    });
  }
}

export { DetailModel };
