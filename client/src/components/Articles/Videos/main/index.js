// eslint-disable-next-line
import React from 'react';
import VideosList from '../../../widgets/VideosList/videosList';

const VideoMain = () => {
    return (
        <div>
            <VideosList
                type="card"
                title={false}
                loadmore={true}
                start={0}
                amount={9}
                />
        </div>
    );
}

export default VideoMain;