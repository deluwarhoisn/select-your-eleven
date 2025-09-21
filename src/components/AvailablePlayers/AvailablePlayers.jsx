import user from "../../assets/Group.png"
import black from "../../assets/Group(1).png"
const AvailablePlayers = ({ playersPromise }) => {
    const PlayerData = (playersPromise)
    console.log(PlayerData)
    return (
        <div className="max-w-[1200px] mx-auto">

            {
                PlayerData.map(player => <div className="card bg-base-100 w-96 shadow-sm p-4">
                    <figure>
                        <img className="rounded-2xl"
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes" />
                    </figure>
                    <div className="mt-4">
                        <div className="flex ">
                            <img src={user} alt="" /><h2 className="card-title ml-2">Virat kohli</h2>
                        </div>

                        <div className="flex justify-between border-b-1 pb-2 border-gray-400 mt-4">
                            <div className="flex items-center">
                                <img className="w-[20px] h-[20px]" src={black} alt="" />
                                <span className="ml-2">India</span>
                            </div>
                            <button className="btn">All Runder</button>
                        </div>

                        <div className="font-bold">
                            <div className="flex justify-between">    <span>Rating</span><p>5</p></div>
                            <div className="flex justify-between items-center pt-3"><p>Left-Hand-Bat</p> <p className="text-gray-400">Left-Hand-Bat</p></div>
                            <div className="flex justify-between pt-4 items-center">
                                <p>Price: $1500000</p>
                                <button className="btn">Choose Player</button>
                            </div>
                        </div>


                    </div>
                </div>)
            }


        </div>
    );
};

export default AvailablePlayers;