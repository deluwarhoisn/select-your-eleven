import userIcon from "../../assets/Group.png";
import countryIcon from "../../assets/Group(1).png";
import { use } from "react";

const AvailablePlayers = ({ playersPromise }) => {
  const PlayerData = use(playersPromise);

  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {PlayerData.map((player, index) => (
        <div key={index} className="card bg-base-100 shadow-sm p-4">
          {/* Player Image */}
          <figure>
            <img
              className="rounded-2xl w-full h-64 object-cover"
              src={player.playerImage}
              alt={player.playerName}
            />
          </figure>

          {/* Player Details */}
          <div className="mt-4">
            {/* Name */}
            <div className="flex items-center">
              <img src={userIcon} alt="player-icon" />
              <h2 className="card-title ml-2">{player.player}</h2>
            </div>

            {/* Country + Role */}
            <div className="flex justify-between items-center border-b border-gray-300 pb-2 mt-4">
              <div className="flex items-center">
                <img className="w-[20px] h-[20px]" src={countryIcon} alt="country-icon" />
                <span className="ml-2">{player.playerCountry}</span>
              </div>
              <button className="btn btn-sm">{player.playerRole}</button>
            </div>

            {/* Stats */}
            <div className="font-bold mt-3 space-y-3">
              <div className="flex justify-between">
                <span>Rating</span>
                <p>{player.playerRating}</p>
              </div>
              <div className="flex justify-between items-center">
                <p>{player.battingStyle}</p>
                <p className="text-gray-400">{player.bowlingStyle}</p>
              </div>

              {/* Price + CTA */}
              <div className="flex justify-between items-center pt-4">
                <p>Price: {player.price}</p>
                <button className="btn btn-primary btn-sm">Choose Player</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvailablePlayers;