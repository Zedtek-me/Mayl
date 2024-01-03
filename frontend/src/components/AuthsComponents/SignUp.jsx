import React, {useState, useContext} from "react"
import { loggedIn } from "../../roots/App.jsx"
import { updateState, routeUserBasedOnFetchResult } from "../../utils/authUtils.js"
import { useNavigate, Link } from "react-router-dom"
import "../../styles/AuthsStyles/Auths.css"
import { ToastContainer, toast } from "react-toastify"

export default function SignUp(props){
    const [signUpInfo, setSignUpInfo] = useState({})
    const navigator = useNavigate()
    let userHasLoggedIn = useContext(loggedIn)
    return (
        <>
            {
                userHasLoggedIn ? <Dashboard/> : (
                    <div className="signup-page">
                        <div className="greenWithLogoBg">
                            <img src="" alt="logo image" />
                        </div>
                        <form action="" id="signup-form" onSubmit={(e)=>routeUserBasedOnFetchResult(e, signUpInfo, navigator, toast)}>
                            <label htmlFor="username">
                                <h3 id="email-txt">Username</h3>
                                <input type="username" name="username" id="username-field" placeholder="Username" inputMode="email" onChange={(e)=>updateState(e, setSignUpInfo)} autoComplete="current-username" required/>
                            </label>
                            <label htmlFor="email">
                                <h3 id="email-txt">Email</h3>
                                <input type="email" name="email" id="email-field" placeholder="Email" inputMode="email" onChange={(e)=>updateState(e, setSignUpInfo)} autoComplete="email" required/>
                            </label>
                            <label htmlFor="password">
                                <h3 id="password-txt">Password</h3>
                                <input type="password" name="password" className="password-field" placeholder="Password" onChange={(e)=>updateState(e, setSignUpInfo)} autoComplete="current-password" required/>
                            </label>
                            <label htmlFor="password">
                                <h3 id="password-txt">Confirm Password</h3>
                                <input type="password" name="confirmPassword" className="password-field" placeholder="Password" onChange={(e)=>updateState(e, setSignUpInfo)} autoComplete="current-password" required/>
                            </label>
                            <hr className="divider"/>
                            <div className="term-agreement">
                                <input type="checkbox" name="agreementBox" id="agreement-box" required/>
                                <p id="term-txt">I accept and agree to the terms of use.</p>
                            </div>
                            <div className="btn-prompt">
                                <h3 id="signup-prompt-txt">Already have an account?<Link to="/">Login</Link></h3>
                                <button type="submit">Sign Up</button>
                            </div>
                        </form>
                        <ToastContainer className="toast-container"/>
                    </div>
                )
            }
        </>
    )
}