
import PurpleTracking from '../../assets/Images/purple-connected-lines.webp';

function Banner(){

    return(
        <div className="w-full h-[20rem] reltive">
            <img src={PurpleTracking} alt="Banner" className='h-[25rem] w-full'/>
            <div className="absolute top-20 left-0 right-0 mx-auto w-[20rem]">
                <div className="flex flex-col gap-4">

                    <div className="text-5xl font-semibold text-white">
                        Crypto Tracker
                    </div>

                    <div className="font-semobold text-white text-sm text-center">
                        Get all info regarding cryptocurrencies
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Banner;