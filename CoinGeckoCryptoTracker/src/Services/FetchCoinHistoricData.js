import AxiosInstance from "../helpers/AxiosInstance";

export async function FetchCoinHistoricData(id, interval, days=7, currency='usd') {
    try{
        const response = await AxiosInstance.get(`coins/${id}/market_chart?days=${days}&vs_currency=${currency.toLowerCase()}&interval=${interval}`)
        return response.data;
    }catch(error){
        console.log(error)
        return null;
    }
    
}