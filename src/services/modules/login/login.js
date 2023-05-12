import { API } from "../../../config";

export default build =>
  build.mutation({
    query: ({ email,password,is_staff }) =>{
      console.log("IN API",API.LOGIN,email,password,is_staff);
      const data=new FormData()
      data.append('email', email);
      data.append('password', password);
      data.append('is_staff',is_staff);
      return ({
      body:data,
      method: 'POST',
      url: API.LOGIN,
    })
  }
  })
