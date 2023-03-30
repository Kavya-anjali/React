import React,{useState} from 'react'
import axiosInstance from '../Helper/axiosInstance';

const CreatePost = () => {

    const [Username,setUsername] = useState("");
    const [Password,setPassword] = useState("");

    let handleSubmit=async(e)=>{
        e.preventDefault()

        try{
             let payload={Username,Password}
             let data=await axiosInstance.post("/posts",payload)
             console.log(data);
        }
        catch{
           console.log("UNABLE TO CONNECT TO SERVER");
        }
}



  return (
    <div>
    <form action="" onSubmit={handleSubmit}>
<label htmlFor="Username">Username</label>
<input type="text"  id='Username' onChange={(e)=>{
    setUsername(e.target.value)
}}/><br></br><br></br>
<label htmlFor="Password">Password</label>
<input type="password"  id='Password' onChange={(e)=>{
    setPassword(e.target.value)
}}/><br></br><br></br>
<button>SUBMIT</button>
    </form>
    </div>
  )
  }

export default CreatePost