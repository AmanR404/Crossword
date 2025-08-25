import React from 'react'
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
import { useState } from 'react'
import {app} from '../firebase'
import { useRouter } from 'next/router'

const signup = () => {
    // Instances
    const auth = getAuth(app)
    const router = useRouter()

    // States
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // Signup with Email Password
    const createUser = () => {
        createUserWithEmailAndPassword(auth,email,password).then((value)=>{
            alert("You can Login now...");
           router.push("/login")
        }).catch((err)=>console.log(err))
    }
  return (
   <section className='flex justify-center items-center'>
        <div className='flex flex-col gap-4'>
            <span className='font-bold'>Signup to Crossword</span>
            <input onChange={(e)=>setEmail(e.target.value)} className='bg-white' type='text' placeholder='Enter Email Address' value={email}/>
            <input onChange={(e)=>setPassword(e.target.value)} className='bg-white' type='text' placeholder='Enter Password' value={password}/>
            <button className='w-full bg-black text-white rounded-lg py-1 cursor-pointer' onClick={()=>createUser()}>Submit</button>
        </div>
   </section>
  )
}

export default signup
