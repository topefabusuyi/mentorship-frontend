
import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useShopContext } from '../context.tsx'
import { useNavigate } from 'react-router-dom'
function Login() {
  interface LoginResponse {
    token: string;
    user: {
      id: string;
      email: string;
      name: string;
      role: string;
    };
  }

  const context = useShopContext()
  const backendUrl = context?.backendUrl || '';
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const submit = async (e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      setIsLoading(true)
      setError('') 
      try {
        const response = await axios.post<LoginResponse>(`${backendUrl}/api/auth/login`,{
          email,
          password
        })
        if(response.status === 200) {
          navigate('/')
        }

      } catch (error) {
        console.log(error)
      }finally {
        setIsLoading(false)
      }
    
  }
  return (
    <div className="mt-10 justify-self-center mx-auto">
      <h1 className="justify-self-center justify-center font-bold text-2-3xl">Login Page</h1>
      <form className="flex flex-col mt-4" onSubmit={submit}>
        <label htmlFor="email" className="mb-2">Email:</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="your valid email address " id="email" className="border p-2 mb-4" required />
        
        <label htmlFor="password" className="mb-2">Password:</label>
        
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="your secure password" id="password" className="border p-2 mb-4" required />
        
        <button type="submit" className="bg-blue-500 text-white p-2">Login</button>
        </form>
    </div>
  )
}

export default Login