import React from 'react';
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';


const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [
        signInWithEmailAndPassword,
        eUser,
        eLoading,
        emailError,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    let signInErrorMessage;

    if (error || gError || emailError) {
        signInErrorMessage = error?.message || gError?.message || emailError?.message;
    };

    if (loading || gLoading || eLoading) {
        return <Loading></Loading>
    };

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
        // console.log(data)
    };

    if (eUser || user || gUser) {
        navigate(from, { replace: true });
    }

    return (
        <div className="grid items-center justify-items-center mt-10 bg-base-200 py-10 lg:px-10 md:px-5 sm:px-3">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Login!</h2>


                    <form onSubmit={handleSubmit(onSubmit)}>


                        <div className="form-control w-full max-w-xs">
                            <div>
                                <label className="label">
                                    <span className="label-text">Your Email <span className='text-orange-500'>*</span></span>
                                </label>
                                <input {...register("email", { required: true })} type="text" placeholder="Your email" className="input input-bordered w-full max-w-xs" />
                                <label className="label">
                                    {errors.email && <span className="label-text-alt text-warning">Email is required</span>}

                                </label>
                            </div>


                            <div>
                                <label className="label">
                                    <span className="label-text">Your Password <span className='text-orange-500'>*</span></span>
                                </label>
                                <input {...register("password", { required: true })} type="text" placeholder="Your password" className="input input-bordered w-full max-w-xs" />
                                <label className="label">
                                    {errors.password && <span className="label-text-alt text-warning">Password is required</span>}

                                </label>
                            </div>
                        </div>
                        <p className="text-red-500 text-xs mb-2">{signInErrorMessage}</p>
                        <input type="submit" className='btn btn-accent w-full max-w-xs' value='login' />
                        <p className='mt-3'><small>Don't have an account? <Link to='/register' className='text-secondary'>Please Register</Link></small></p>
                    </form>
                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline"
                    >Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;