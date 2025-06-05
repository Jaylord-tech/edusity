
function Button(){

const clickHandle = (e) => e.target.textContent = "OUCH !";

    return(<button onClick={(e)=>clickHandle(e)}>CLICK ME</button>);
}
   
export default Button