import React from "react"
import "../../../styles/HomeStyles/Home.css"
import { Link } from "react-router-dom"


export default function Dashboard(props){
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
            <div className="email-previews">
                Sample previews of the emails
            </div>
        </div>
    )
}