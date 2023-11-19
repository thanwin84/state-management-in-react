import React, {useState, useContext} from "react";
import UserContext from "../context/UserContext";

export default function Login(){
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })
    const {setUser} = useContext(UserContext)

    function handleChange(e){
        setFormData(prev =>{
            return {  
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }
    function handleSubmit(e){
        e.preventDefault()
        setUser(formData)
    }
    return ( 
        <div className="p-6 dark:bg-slate-900 dark:text-white">
            <h2 className="text-4xl text-center">Login</h2>
            <form className="flex flex-col p-3 w-80 mx-auto shadow-md">
                <input 
                    type="text" 
                    placeholder="username"
                    value = {formData.username}
                    onChange={handleChange} 
                    name = 'username'
                    className="p-1 border border-spacing-1 mb-2 rounded-sm"
                />
                <input 
                    type="text" 
                    placeholder="password" 
                    value = {formData.password}
                    onChange={handleChange} 
                    name = "password"
                    className="p-1 border border-spacing-1 mb-2 rounded-sm"
                />
                <button 
                    onClick={handleSubmit}
                    className="p-1 bg-blue-600 text-white font-medium"
                >
                    Submit 
                </button>
            </form>
        </div>
    )
}