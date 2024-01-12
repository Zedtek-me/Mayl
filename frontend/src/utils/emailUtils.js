export const submitMail = async (e, stateValue)=>{
    /**mail sender util */
    e.preventDefault()
    let {body, from, to} = stateValue
    console.log(body, from, to)
    let response = await fetch("http://localhost:7000/sendMail", {
        method:"POST",
        body: JSON.stringify({
            from:from,
            to:to,
            body:body
        }),
        headers:{
            "Content-type":"application/json"
        }
    })
    let data = await response.json()
    if(data.success)return data.success
    return data.error
}


export function updateComposeMailState(e, flagUpdater){
    flagUpdater(true)//sets the flag to true ('toSendMail' flag)
    return 
}