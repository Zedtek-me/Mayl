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


export const fetchUser = async (stateProps)=>{
    /**returns a user object from the backend */
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
    /**validates the data to be sent; then fetch the user */
    e.preventDefault()
    // check whether from signin or signup page, then validate accordingly
    if(!("username" in stateProps)){
        // means login page (only expects username and password); fetch directly
        try{
            let data = await fetchUser(stateProps)
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
    }

    else{
        // validate against signup
        let passwordOne = stateProps.password
        let passwordTwo = stateProps.confirmPassword
        if(passwordOne !== passwordTwo){
            toast.error("Both passwords must match", {
                position:toast.POSITION.TOP_RIGHT
            })
            return 
        }
        // otherwise fetch the user here
        try{
            let data = await fetchUser(e, stateProps)
        }
        catch(error){
            toast.error("No user found!", {
                position:toast.POSITION.TOP_RIGHT
            })
            return 
        }
        toast.success("Signup successful!", {
            position:toast.POSITION.TOP_RIGHT
        })
    }

    return navigator("/dashboard")
}