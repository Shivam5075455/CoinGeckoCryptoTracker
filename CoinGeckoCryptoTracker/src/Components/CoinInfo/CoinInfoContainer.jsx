import CoinInfo from "../CoinInfo/CoinInfo"
import Alert from "../Alert/Alert";
import ContentLoader, { Facebook } from 'react-content-loader'
import useFetchCoinHistory from "../../Hooks/useFetchCoinHistory";

function CointInfoContainer({ coinId }) {

    const [
        historicData,
        isLoading,
        isError,
        days,
        setDays,
        setCoinInterval,
        currency
    ] = useFetchCoinHistory(coinId);


    if (isLoading) {
        return (<ContentLoader />)
    }

    if (isError) {
        return (<Alert message="Error fetching data" type="error" />)
    }

    return (
        <div>
            <CoinInfo
                historicData={historicData}
                setDays={setDays}
                setCoinInterval={setCoinInterval}
                days={days}
                currency={currency}
            />

        </div>
    )
}
export default CointInfoContainer;