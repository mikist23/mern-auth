import { useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";


function SignUp() {
  const [formData, setFormData] = useState({});
  const [error ,setError] = useState(false)
  const [loading,setLoading] = useState(false)

   const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      setLoading(true)
      const response = await axios.post('/api/auth', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
       
      });
  
      const data = response.data;
      setLoading(false)
      if(data.success === false){
        setError(true)
        return
      }
      setError(false)
      console.log(data);
    } catch (error) {
      setLoading(false)
      setError(true)
      console.error('Error during signup:', error);
      console.log('Response:', error.response); 
      console.log('Response:', error.message);
    }
    
  };
  
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          id="userName"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />
        <button disabled={loading} className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          {loading ? 'Loading...' : "Sign Up"}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
          <span className="text-blue-500">Sign in</span>
        </Link>
        </div>
      <p className='text-red-700 mt-5'>{error && 'Something went wrong!'}</p>
    </div>
  );
}


export default SignUp;
