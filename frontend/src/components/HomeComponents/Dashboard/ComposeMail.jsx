import React, { useState } from "react"
import "../../../styles/HomeStyles/Home.css"
import { updateState } from "../../../utils/authUtils"
import { submitMail } from "../../../utils/emailUtils"

const ComposeMail = ()=>{
    const [mailData, setMailData] = useState({})
    // TODO: get the logged in user, and use its email as the default `from` user. add other fields for the `to` user and `subjects`
    return (
        <div className="compose-mail">
            Compose your mail here
            <form action="" className="mail-form" onSubmit={(e)=> submitMail(e, mailData)}>
                <textarea name="mailDataField" id="mail-data-field" cols="30" rows="10" placeholder="Compose mail" onChange={(e)=>updateState(e, setMailData)}></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}


export default ComposeMail