import AxiosInstance from "../helpers/AxiosInstance";

export async function FetchCoinData() {
    try{
        const response = await AxiosInstance.get("/coins/markets?vs_currency=usd");
        console.log("response: ",response);
        return response;
    }catch(error){
        console.error("Error fetching coin data:", error);
        return null;
    }

}