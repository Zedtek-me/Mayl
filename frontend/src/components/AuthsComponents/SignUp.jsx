import React, {useState, useContext} from "react"
import { loggedIn } from "../../roots/App.jsx"
import { updateSignupAndSignin, routeUserBasedOnFetchResult } from "../../utils/authUtils.js"
import { useNavigate, Link } from "react-router-dom"
import "../../styles/AuthsStyles/Auths.css"

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
                        <form action="" id="signup-form" onSubmit={(e)=>routeUserBasedOnFetchResult(e, signUpInfo, navigator)}>
                            <label htmlFor="email">
                                <h3 id="email-txt">Email</h3>
                                <input type="email" name="email" id="email-field" placeholder="Email" inputMode="email" onChange={(e)=>updateSignupAndSignin(e, setSignUpInfo)} autoComplete="email"/>
                            </label>
                            <label htmlFor="password">
                                <h3 id="password-txt">Password</h3>
                                <input type="password" name="password" id="password-field" placeholder="Password" onChange={(e)=>updateSignupAndSignin(e, setSignUpInfo)} autoComplete="current-password"/>
                            </label>
                            <hr className="divider"/>
                            <div className="term-agreement">
                                <input type="checkbox" name="agreementBox" id="agreement-box" />
                                <p id="term-txt">I accept and agree to the terms of use.</p>
                            </div>
                            <div className="btn-prompt">
                                <h3 id="signup-prompt-txt">Already have an account?<Link to="/">Login</Link></h3>
                                <button type="submit">Sign Up</button>
                            </div>
                        </form>
                    </div>
                )
            }
        </>
    )
}