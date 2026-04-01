import React from 'react';

const WorkVideo = () => {
    return (
        <div>
            <video
              src="/video/workvideo.mp4"
              width={1440}
              height={766}
              className="object-cover w-full h-auto"
              preload="auto"
              autoPlay
              muted
              loop
              playsInline
            >
            </video>
          </div>
    );
};

export default WorkVideo;