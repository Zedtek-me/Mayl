import React, {useState, useContext, useEffect} from "react"
import { useNavigate, Link } from "react-router-dom"
import { loggedIn } from "../../roots/App.jsx"
import { fetchUser, updateSignupAndSignin, routeUserBasedOnFetchResult } from "../../utils/authUtils.js"
import "../../styles/AuthsStyles/Auths.css"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";

export default function Login(props){
    const [loginInfo, setLoginInfo] = useState({})
    const navigator = useNavigate()
    let userHasLoggedIn = useContext(loggedIn)
    return (
        <>
            {
                userHasLoggedIn ? <Dashboard/> : (
                    <>
                        <ToastContainer className="toast-container"/>
                        <div className="login-page">
                            <div className="greenWithLogoBg">
                                {/* green background, carrying logo */}
                                <img src="" alt="logo image" />
                            </div>
                            <form action="" id="login-form" onSubmit={(e)=>routeUserBasedOnFetchResult(e, loginInfo, navigator, toast)}>
                                <label htmlFor="email">
                                    <h3 id="email-txt">Email</h3>
                                    <input type="email" name="email" id="email-field" placeholder="Email" inputMode="email" onChange={(e)=>updateSignupAndSignin(e, setLoginInfo)} autoComplete="email"/>
                                </label>
                                <label htmlFor="password">
                                    <h3 id="password-txt">Password</h3>
                                    <input type="password" name="password" id="password-field" placeholder="Password" onChange={(e)=>updateSignupAndSignin(e, setLoginInfo)} autoComplete="current-password"/>
                                </label>
                                <hr className="divider"/>
                                <div className="term-agreement">
                                    <input type="checkbox" name="agreementBox" id="agreement-box" />
                                    <p id="term-txt">I accept and agree to the terms of use.</p>
                                </div>
                                <div className="btn-prompt">
                                    <h3 id="signup-prompt-txt">Don't have an account yet? <Link to="/signup">Sign Up</Link></h3>
                                    <button type="submit">Login</button>
                                </div>
                            </form>
                        </div>
                    </>
                )
            }
        </>
    )
}