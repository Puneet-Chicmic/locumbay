import { api } from '../../api'
import updateProfile from './updateProfile'


export const userProfile = api.injectEndpoints({
  endpoints: build => ({
    updateProfile: updateProfile(build),
  }),
  overrideExisting: false,
})

export const { useUpdateProfileMutation} = userProfile