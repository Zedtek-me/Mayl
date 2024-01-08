import React, {useEffect, useState} from "react"
import "../../../styles/HomeStyles/Home.css"
import { Link } from "react-router-dom"
import ComposeMail from "./ComposeMail.jsx"
import ComposePrompt from "./ComposePrompt.jsx"
import { updateComposeMailState } from "../../../utils/emailUtils"

export default function Dashboard(props){
    let [toSendMail, setToSendMail] = useState(false)
    // use an effect to cause a re-render of this component whenever the 'toSendMail' state changes from an event listener
    useEffect(()=>{
        return
    }, [toSendMail])

    return (
        <div className="dashboard">
            <div className="menu-panel">
                <div className="logo-on-dashboard">
                    <img src="" alt="product logo" id="product-logo"/>
                    <h2 id="product-name">Mayl</h2>
                </div>
                <div className="profile-details">
                    <img src="" alt="user thumbnail" />
                    <div className="name-and-title">
                        <h4 id="username">Dummy Name</h4>
                        <p id="title">Dummy title</p>
                        {/* an icon should go below here for toggling */}
                    </div>
                </div>
               <div className="mail-options">
                    <h3 className="label-txt">
                        Mail Options
                    </h3>
                    <Link to="/inbox">Inbox</Link>
                    <Link to="/drafts">Drafts</Link>
                    <Link to="/sent">Sent</Link>
                    <Link to="/bookmark">Bookmarked</Link>
                    <div className="other-options">
                       <p>Others {/* add an icon for  toggling here too */}</p>
                       <Link to="/spam">Spam</Link>
                    </div>
                </div>
            </div>
            {
                toSendMail ? <ComposeMail/> : (
                    <div className="email-previews">
                        <div className="format-and-prompt">
                            <div className="format-section">This is the format section</div>
                            <ComposePrompt onClick={(e)=> updateComposeMailState(e, setToSendMail)}/>
                        </div>
                        <div className="main-preview-section">
                            Main preview page
                        </div>
                    </div>
                )
            }
            {/* TODO: the formating jsx is meant to be together with the composer component. So, update this later. */}
        </div>
    )
}