import { useState } from "react";

function Register(){
    const [data,setData]=useState({f_name:"",course:""})
    
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setData((prev)=>({...prev,[name]:value}))
        console.log(data)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(data)
    }
    return(
        <>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <label>Full name</label>
                <input type="text" name="f_name" value={data.f_name} onChange={handleChange}/>
                <br/><br/>
                <label>Course</label>
                <input type="text" name="course" value={data.course} onChange={handleChange}/>
                <br/><br/>
                <input type="submit" value={"Register"}/>
            </form>
        </>
    )
}
export default Register;