import React from 'react';

const Music = (props) => {

    let tracksElement = props.musicPage.tracks.map(track => <div key={track.id}>{track.trackName}</div>);

    return (
        <div>
            {tracksElement}
        </div>
    );
};

export default Music;