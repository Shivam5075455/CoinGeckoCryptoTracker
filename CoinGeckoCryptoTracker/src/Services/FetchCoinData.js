import AxiosInstance from "../helpers/AxiosInstance";

export async function FetchCoinData({page=1, currency='usd'}) {
    const perPage = 10;
    try{
        const response = await 
        AxiosInstance.get(`/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${perPage}&page=${page}`);
        // console.log("response: ",response);
        return response.data;
    }catch(error){
        console.error("Error fetching coin data:", error);
        return null;
    }

}