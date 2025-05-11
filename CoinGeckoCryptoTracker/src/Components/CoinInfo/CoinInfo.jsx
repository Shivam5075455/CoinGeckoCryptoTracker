import { Line } from "react-chartjs-2";
import Alert from '../Alert/Alert'
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import {chartDays} from '../../helpers/Constants'

function CointInfo({ historicData, setDays, setCoinInterval, days, currency }) {

    Chart.register(CategoryScale);
    if (!historicData) {
        return (<Alert message="No data available" type="info" />)
    }

    function handleDayChange(e) {
        console.log(e.target.options[e.target.selectedIndex].value);
        const daysSelected = e.target.options[e.target.selectedIndex].value;
        if (daysSelected == 1) {
            setCoinInterval('');
        } else {
            setCoinInterval('daily'); // Call the function
        }
        console.log(setCoinInterval)
        setDays(daysSelected)
    }

    return (
        <div
            className="flex flex-col items-center justify-center mt-6 p-6 w-full md:w-3/4"
        >
            <div
                className="h-[500px] w-full"
            >
                <Line

                    data={{
                        labels: historicData.prices.map(coinPrice => {
                            let date = new Date(coinPrice[0]); // converting UNIX timestamp to Date
                            let time = date.getHours() > 12 ? `${date.getHours() - 12} : ${date.getMinutes()} PM` :
                                `${date.getHours()}:${date.getMinutes()} AM`;
                            return days === 1 ? time : date.toLocaleDateString();
                        }),
                        datasets: [
                            {
                                label: `Price (Past ${days} ${days === 1 ? 'Day' : 'Days'} in ${currency})`,
                                data: historicData.prices.map(coinPrice => coinPrice[1]) // this is for Line 1
                            }

                        ]
                    }}
                    height={800}
                    options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        elements: {
                            point: {
                                radius: 0
                            }
                        }
                    }}

                />
            </div>


            <div
                className="flex justify-center mt-5 w-full"
            >
                <select 
                    value={days}
                    className="select select-primary"
                    onChange={handleDayChange}>
                    {chartDays.map((day, index) => {
                        return (
                            <option key={index} value={day.value} >{day.label}</option>
                        )
                    })}
                </select>

            </div>




        </div>
    )
}
export default CointInfo;