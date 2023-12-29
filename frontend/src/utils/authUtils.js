export const signupAndSignin = (e, setter)=>{
    let element = e.target
    let key = element.name
    let value = element.value
    let updated = new Object()
    updated[key] = value
    setter((prevState)=>{
        return {...prevState, ...updated}
    })
}


export const fetchUser = async (userProps)=>{
    /**returns a user object from the backend */
    let response = await fetch("http://localhost:7000/user", {
        method:"POST",
        body: JSON.stringify(userProps),
        headers:{
            "Content-Type":"application/json",
            "Token":""
        }
    })
    let data = response.json()
    return data.errors || data
}