import _ from 'lodash';
import React from 'react';

const HLSPlayer: React.FC<{
    link: string;
    thumbnail: string;
}> = props => {
    return (
        <iframe
            className='w-full h-full'
            srcDoc={`<html>
                        <head>
                            <link href='https://vjs.zencdn.net/7.2.3/video-js.css' rel='stylesheet'>
                            <style>
                                *::-webkit-scrollbar { display: none; background: black; }
                                body { background-color: #1E1E1E !important; !important; margin: 0 !important; }
                                .vjs-fullscreen-control { display: none !important; }
                                .vjs-control-bar { background-color: #EAB308 !important; position: relative !important; }
                            </style>
                        </head>
                        <body>
                            <video poster='${props?.thumbnail}' id='hls-player' style='width: 100%; height: inherit;' muted disablePictureInPicture oncontextmenu='return false;' controlsList='nofullscreen' class='video-js vjs-default-skin' controls>
                                <source type='application/x-mpegURL' src='${props?.link!}'>
                            </video>
                            <script src='https://vjs.zencdn.net/ie8/ie8-version/videojs-ie8.min.js'></script>
                            <script src='https://cdnjs.cloudflare.com/ajax/libs/videojs-contrib-hls/5.14.1/videojs-contrib-hls.js'></script>
                            <script src='https://vjs.zencdn.net/7.2.3/video.js'></script>
                            <script>videojs('hls-player');/*.play();*/</script>
                        </body>
                    </html>`}
        >
        </iframe>
    )
}

export default HLSPlayer;