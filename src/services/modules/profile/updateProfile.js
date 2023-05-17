import { API } from "../../../config";

export default build =>
  build.mutation({
    query: (data) =>{
        console.log(data,"DATA IN UPDATE PROFILE");
      const form=new FormData()
      !!data?.firstName && form.append('first_name', data?.firstName);
      !!data?.lastName && form.append('last_name', data?.lastName);
      !!data?.dob.toString() && form.append('dob', data?.dob.toString());
      !!data?.phoneNumber && form.append('phone_number', data?.phoneNumber);
      !!data?.document && form.append('document', data?.document);
      !!data?.password && form.append('password', data?.password);
      !!data?.address && form.append('address', data?.address);
      !!data?.country?.name && form.append('country', data?.country?.name);
      !!data?.state?.name && form.append('state', data?.state?.name);
      !!data?.city && form.append('city', data?.city);
      !!data?.photo?.path && form.append('photo',{
        uri: data?.photo?.path,
        type: data?.photo?.mime,
        name: 'photo.jpg',
      });
      !!data?.postCode && form.append('postal_code', data?.postCode);
      !!data?.jobAlert && form.append('job_alert', data?.jobAlert);

      console.log(form,"FORM HERE IS");
      return ({
      body:form,
      method: 'POST',
      url: API.UPDATE_PROFILE,
    })
  }
  })