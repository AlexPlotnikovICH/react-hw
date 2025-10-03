import kot_vid from '../assets/video/cat_vid.mp4';

function VideoComponent({src = kot_vid, width = 300}) {
  return ( <video src={src} width={width} controls/> )}
export default VideoComponent;