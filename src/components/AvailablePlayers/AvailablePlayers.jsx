import React, { use } from 'react';

const AvailablePlayers = ({playersPromise}) => {
    const PlayerData=use (playersPromise)
    console.log(PlayerData)
    return (
        <div>
            avilabele
        </div>
    );
};

export default AvailablePlayers;