import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import homeBKG from '../assets/artboard-studio.jpg';

function Register() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    console.log(data);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100 bg-cover" style={{ backgroundImage: `url(${homeBKG})` }}>
      <div className="bg-white p-20 rounded-lg shadow-md text-center">
        <h1 className="text-4xl mb-4 text-green-800">Registration</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input className="block border border-grey-light w-full p-3 rounded mb-4" name="firstName" {...register('firstName')} placeholder="First Name" required />
          <input className="block border border-grey-light w-full p-3 rounded mb-4" name="lastName" {...register('lastName')} placeholder="Last Name" required />
          <input className="block border border-grey-light w-full p-3 rounded mb-4" name="email" {...register('email')} placeholder="Email" required />
          <input className="block border border-grey-light w-full p-3 rounded mb-4" name="phone" {...register('phone')} placeholder="Phone (optional)" />
          <button className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;