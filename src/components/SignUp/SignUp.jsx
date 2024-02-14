import React,{useState} from 'react'
import { Link, Navigate } from 'react-router-dom';
import { getAuth } from "firebase/auth";
import { doCreateUserWithEmailAndPassword } from '../../firebase/auth';
const SignUp = () => {

    const navigate = Navigate;


    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [isReg,setIsReg]=useState(false);
    const [error,setError]=useState("");
    const [loading, setLoading] = useState(false);
    
    const handleSubmit= async (e)=>{
     e.preventDefault()
     if(!isReg){
      setLoading(true);
      setIsReg(true)
      try{
        await doCreateUserWithEmailAndPassword(email, password)
        navigate("/");
      }catch(err){
        setError(err.message);
      }finally {
        setLoading(false);
      }
     }
    }

  return (
    <div className="bg-blue-800 flex justify-center  items-center h-screen">
      <div className="flex flex-col justify-center items-center p-25 bg-white p-6 rounded-md shadow-md w-1/2">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Login in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  onChange={(e)=>{setError("");setName(e.target.value)}}
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
           
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  onChange={(e)=>{setError("");setEmail(e.target.value)}}
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>

              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={(e)=>{setError("");setPassword(e.target.value)}}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="text-sm">
              <label className="block text-gray-500 font-bold" htmlFor="remember">
                <input
                  className="ml-2 leading-tight"
                  type="checkbox"
                  id="remember"
                  name="remember"
                />
                <span className="text-sm"> &nbsp; remember me</span>
              </label>
            </div>

            <div >
              <button
                type="submit"
                onSubmit={handleSubmit}
                className="flex w-full justify-center 
                rounded bg-blue-800 px-3 py-1.5 text-base
                font-semibold leading-6 text-white shadow-sm
                hover:bg-blue-700 focus-visible:outline 
                focus-visible:outline-2 focus-visible:outline-offset-2
                focus-visible:outline-blue-600"
              >
               {loading ? 'Signing Up...' : 'Sign Up'}
              </button> 
            </div>
          </form>
          <div className='text-red-500' >
            {error? error :""}
          </div>
            <div className="flex justify-center mt-4 text-sm">
           Already have an account? <Link  className="text-blue-600" to="/login"> &nbsp; Login</Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp