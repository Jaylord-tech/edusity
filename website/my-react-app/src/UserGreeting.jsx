function UserGreeting(props){

    const welcomeMessage = <h2 className="welcomeMessage">
        Welcome {props.username}</h2>

    const failurePrompt = <h2 className="failurePrompt">
        You need to login to continue
    </h2>   
return(
props.isLoggedIn? welcomeMessage:failurePrompt
)
}
UserGreeting.defaultProps ={
    isLoggedIn:false,
    username :'Guest',
}
export default UserGreeting