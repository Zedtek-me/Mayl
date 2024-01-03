export const submitMail = async (e, stateValue)=>{
    /**mail sender util */
    e.preventDefault()
    let {body, from, to} = stateValue
    console.log(body, from, to)
    let response = await fetch()
    let data = await response.json()
    // send mail data to the backend for storage in the db, and for relay to the smtp server
}


export function updateComposeMailState(e, flagUpdater){
    flagUpdater(true)//sets the flag to true ('toSendMail' flag)
    return 
}