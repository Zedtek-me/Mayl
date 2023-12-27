import React, {createContext, useState, useEffect } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import "../styles/root.css"
import SignUp from "../components/AuthsComponents/SignUp.jsx";
import Login from "../components/AuthsComponents/Login.jsx"
import Dashboard from "../components/HomeComponents/Dashboard/Dashboard.jsx";
export const loggedIn = createContext(false)

const App = ()=>{
    const [userLoggedIn, setUserLoggedIn] = useState(false)
    useEffect(()=>{
        // make a fetch to the backend to determine whether the user is logged in here.

        return //a cleanup
    })
    return (
        <>
            <loggedIn.Provider value={userLoggedIn}>
                <Router>
                    <Routes>
                        <Route path="/">
                            <Route index element={<SignUp/>}/>
                            <Route path="login/" element={<Login/>}/>
                            <Route path="dashboard/" element={<Dashboard/>}/>
                            <Route path="all-mails/:search" element={<AllMail/>}/>
                            <Route path="inbox/:search" element={<Inbox/>}/>
                        </Route>
                    </Routes>
                </Router>
            </loggedIn.Provider>
        </>
    )
}

export default App