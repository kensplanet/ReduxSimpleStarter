import React from 'react';

const VideoListItem = ({video}) => {
    return (
        <li className="list-group-item">
          <div className="video-list media">
            <div className="media-left">
              <img className="media-object"/>
            </div>

          </div>
          Video
        </li>
    );
}

export default VideoListItem;
