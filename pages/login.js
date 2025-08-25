import React from 'react'
import {getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { useState } from 'react'
import {app} from '../firebase'
import { useRouter } from 'next/router'

const signup = () => {
    // Instances
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider()
    const router = useRouter()

    // States
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // Sign in with Email Password
    const signUser = () => {
        signInWithEmailAndPassword(auth,email,password).then((value)=>router.push("/")).catch((err)=>{console.log(err);alert("Login Failed")})
    }
    // Sign in with Google
    const signupWithGoogle = ()=>{
        signInWithPopup(auth, googleProvider)
    }
  return (
   <section className='flex justify-center items-center'>
        <div className='flex flex-col gap-4'>
            <span className='font-bold'>Login to Crossword</span>
            <input onChange={(e)=>setEmail(e.target.value)} className='bg-white' type='text' placeholder='Enter Email Address' value={email}/>
            <input onChange={(e)=>setPassword(e.target.value)} className='bg-white' type='text' placeholder='Enter Password' value={password}/>
            <button className='w-full bg-black text-white rounded-lg py-1 cursor-pointer' onClick={()=>signUser()}>Sign me in...</button>
            <button onClick={()=>signupWithGoogle()}>Sign in with Google</button>
        </div>
   </section>
  )
}

export default signup
