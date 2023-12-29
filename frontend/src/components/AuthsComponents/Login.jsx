import React, {useState, useContext} from "react"
import { useNavigate } from "react-router-dom"
import { loggedIn } from "../../roots/App.jsx"
import { fetchUser, updateSignupAndSignin, routeUserBasedOnFetchResult } from "../../utils/authUtils.js"

export default function Login(props){
    const [loginInfo, setLoginInfo] = useState({})
    const navigator = useNavigate()
    let userHasLoggedIn = useContext(loggedIn)
    return (
        <>
            {
                userHasLoggedIn ? <Dashboard/> : (
                    <div className="login-page">
                        <form action="" id="login-form" onSubmit={(e)=>routeUserBasedOnFetchResult(e, loginInfo, navigator)}>
                            <label htmlFor="email">
                                <h3 id="email-txt">Email</h3>
                                <input type="email" name="email" id="email-field" placeholder="Email" inputMode="email" onChange={(e)=>updateSignupAndSignin(e, setLoginInfo)} autoComplete="email"/>
                            </label>
                            <label htmlFor="password">
                                <h3 id="password-txt">Password</h3>
                                <input type="password" name="password" id="password-field" placeholder="Password" onChange={(e)=>updateSignupAndSignin(e, setLoginInfo)} autoComplete="current-password"/>
                            </label>
                            <div className="submit-btn">
                                <button type="submit">Login</button>
                            </div>
                        </form>
                    </div>
                )
            }
        </>
    )
}