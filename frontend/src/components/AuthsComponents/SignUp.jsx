import React, {useState, useContext} from "react"
import { loggedIn } from "../../roots/App.jsx"

export default function SignUp(props){
    const [signUpInfo, setSignUpInfo] = useState({})
    let userHasLoggedIn = useContext(loggedIn)
    return (
        <>
            {
                userHasLoggedIn ? <Dashboard/> : (
                    <div className="signup-page">
                        {/* signup jsx goes in here */}
                        Testing sign up page!
                    </div>
                )
            }
        </>
    )
}