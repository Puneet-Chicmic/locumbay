import { api } from '../../api'
import login from './login'

export const userLogin = api.injectEndpoints({
  endpoints: build => ({
    login: login(build),
  }),
  overrideExisting: false,
})

export const { useLoginMutation} = userLogin
