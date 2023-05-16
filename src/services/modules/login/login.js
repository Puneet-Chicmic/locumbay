import { API } from "../../../config";

export default build =>
  build.mutation({
    query: ({ email,password}) =>{
      console.log("IN API",API.LOGIN,email,password);
      const data=new FormData()
      data.append('email', email);
      data.append('password', password);
      return ({
      body:data,
      method: 'POST',
      url: API.LOGIN,
    })
  }
  })
