import React, {useState, useContext} from "react"
import { loggedIn } from "../../roots/App.jsx"

export default function Login(props){
    const [loginInfo, setLoginInfo] = useState({})
    let userHasLoggedIn = useContext(loggedIn)
    return (
        <>
            {
                userHasLoggedIn ? <Dashboard/> : (
                    <div className="login-page">
                        {/* login jsx goes in here */}
                        something in the login page
                    </div>
                )
            }
        </>
    )
}