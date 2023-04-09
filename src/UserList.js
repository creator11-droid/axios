import React, { useEffect, useState } from 'react'
import axios from 'axios'

 const URL ='https://jsonplaceholder.typicode.com/users'
const UserList = () => {
   
  
   const [users, setUsers] = useState([]);
   console.log(users)
   useEffect(()=>{
        //    fetchData()
const data = axios.get(URL).then((response)=>{
    setUsers(response.data)
})           
    },[])
   
    // const fetchData= async ()=>{
    //        try {
    //         const response = await axios.get(`${URL}/2`);
    //         console.log(response)
    //         setUsers(response.data.name)
    //        } catch (error) {
            
    //        }
    // }
  return (
    <div>
     {
            users.map((user)=>{
                return(
                    <>
                   <h2>{user.name}</h2>
                    </>
             
                )
            })
    }
   
    </div>
  )
}

export default UserList