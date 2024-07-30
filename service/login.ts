import API_URL from "../api/interseptor";
import { IAuth } from "../types/auth";
import { saveAccessToken } from "../helpers/helpers";

export const sign_in=async (data:IAuth)=>{
    try {
        const response=await API_URL.post("/login", data)
        if (response.status===200) {
          saveAccessToken(response?.data?.access_token)
        }
    } catch (error) {
        console.log(error)
    }
}