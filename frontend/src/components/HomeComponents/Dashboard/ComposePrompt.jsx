import React from "react";


export default function ComposePrompt({onClick}){
    return (
        <button type="button" id="compose-prompt" onClick={onClick}>
            Compose
        </button>
    )
}