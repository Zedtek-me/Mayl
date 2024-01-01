export const updateSignupAndSignin = (e, setter)=>{
    let element = e.target
    let key = element.name
    let value = element.value
    let updated = new Object()
    updated[key] = value
    setter((prevState)=>{
        return {...prevState, ...updated}
    })
}


export const fetchUser = async (e, stateProps)=>{
    /**returns a user object from the backend */
    e.preventDefault()
    let response = await fetch("http://localhost:7000/user", {
        method:"POST",
        body: JSON.stringify(stateProps),
        headers:{
            "Content-Type":"application/json",
        }
    })
    let data = await response.json()
    return data.errors || data
}

export const routeUserBasedOnFetchResult = async (e, stateProps, navigator, toast)=>{
    try{
        let data = await fetchUser(e, stateProps)
    }
    catch(error){
        toast.error("No user found!", {
            position:toast.POSITION.TOP_RIGHT
        })
        return 
    }
    toast.success("Login successful!", {
        position:toast.POSITION.TOP_RIGHT
    })
    return navigator("/dashboard")
}