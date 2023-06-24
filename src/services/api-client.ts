import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a1c5f7e5653440e386748ecd932093c1",
  },
});
