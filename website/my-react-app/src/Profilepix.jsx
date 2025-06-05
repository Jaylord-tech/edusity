
function Profilepix (){

const imageUrl = './src/assets/images.jpg';
const image =(e)=>e.target.style.display = 'none';

return(<img onClick={(e) => image (e) } src = {imageUrl}></img>);
}
export default Profilepix