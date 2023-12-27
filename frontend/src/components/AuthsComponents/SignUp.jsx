import React, {useState, useContext} from "react"
import { loggedIn } from "../../roots/App.jsx"
let userHasLoggedIn = useContext(loggedIn)

export default function SignUp(props){
    const [signUpInfo, setSignUpInfo] = useState({})
    return (
        <>
            {
                userHasLoggedIn ? <Dashboard/> : (
                    <div className="signup-page">
                        {/* signup jsx goes in here */}
                        Testing sign up page
                    </div>
                )
            }
        </>
    )
}