import React, {useState, useContext} from "react"
import { loggedIn } from "../../roots/App.jsx"

let userHasLoggedIn = useContext(loggedIn)

export default function Login(props){
    const [loginInfo, setLoginInfo] = useState({})
    return (
        <>
            {
                userHasLoggedIn ? <Dashboard/> : (
                    <div className="login-page">
                        {/* login jsx goes in here */}
                    </div>
                )
            }
        </>
    )
}