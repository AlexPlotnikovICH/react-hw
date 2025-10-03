import kot_romashka from '../assets/images/zhivotnye_kot_romashka_30020.jpg';

function ImageComponent({src = kot_romashka, alt = "Kot Romashka", width = 675}) {
  return ( <img src={src} alt={alt} width={width} /> )}
export default ImageComponent;