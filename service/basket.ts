 import API_URL from "../api/interseptor"
 
 export const saveBasketProduct= async (productId: string)=>{
    try {
        const response= await API_URL.post("/basket",  { productId })
        console.log(response)
       return (response?.data)
    } catch (error) {
        console.log(error)
    }
 }