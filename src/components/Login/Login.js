import React from 'react';
import { useForm } from 'react-hook-form';
import './login.css'
const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    const image = "/images/bannerBackground.png";
    const bannerStyle = {
        height: '500px',
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
    }
    return (
        <div style={bannerStyle}>
            <div style={{ width: '300px' }}>
                <div className="logo">
                    <img src="/images/logo2.png" alt="" />
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder="Name"
                        {...register("Name", { required: true, maxLength: 80 })} />
                    <br />
                    <input type="text" placeholder="Email" {...register("Email",
                        { required: true, pattern: /^\S+@\S+$/i })} />
                    <br />
                    <input type="text" placeholder="Password" {...register("Password",
                        { required: true, maxLength: 10, pattern: /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/i })} />
                    <br />
                    <input type="text" placeholder="Confirm Password" {...register("Confirm Password",
                        { required: true, maxLength: 10, pattern: /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/i })} />
                    <br />
                    <input type="submit" className='btn btn-danger' />
                </form>
                <div className='text-center'><a href="#" className=' text-danger'>Already Have an account</a></div>
            </div>
        </div>
    );
};

export default Login;