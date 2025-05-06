import AxiosInstance from "../helpers/AxiosInstance";
// https://api.coingecko.com/api/v3/coins/bitcoin
export async function fetchCoinDetails(id){
    try{
        const response = await AxiosInstance.get(`/coins/${id}`);
        return response.data;
    }catch(error){
        console.log(error)
        return null;
    }

}