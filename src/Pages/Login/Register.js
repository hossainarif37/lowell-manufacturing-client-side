import React from 'react';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGoogle, useUpdateProfile } from "react-firebase-hooks/auth"
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Loading from '../Shared/Loading';

const Register = () => {
    const [signInWithGoogle, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [sendEmailVerification] = useSendEmailVerification(
        auth
    );


    const [
        createUserWithEmailAndPassword,
        eLoading,
        emailError,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate();

    let signInErrorMessage;


    if (gLoading || eLoading || updating) {
        return <Loading></Loading>
    };

    if (gError || emailError || updateError) {
        signInErrorMessage = gError?.message || emailError?.message || updateError?.message;
    };


    const onSubmit = async (data) => {
        await createUserWithEmailAndPassword(data.email, data.password, { sendEmailVerification });
        await updateProfile({ displayName: data.name });

        const user = { name: data.name, email: data.email }
        if (data.email) {
            fetch(`https://damp-sands-17118.herokuapp.com/user/${data.email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    navigate('/home');
                });
        }
    };

    return (
        <div className='grid items-center justify-items-center mt-10 bg-base-200 py-10'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input
                                type="name"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is required'
                                    }
                                })}
                            />

                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />

                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters password required'
                                    }
                                })}
                            />

                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        <p className="text-red-500 text-xs mb-2">{signInErrorMessage}</p>
                        <input value="Sign Up" type="submit" className='btn btn-accent w-full max-w-xs' />
                    </form>
                    <p><small>Already have an account? <Link className='text-secondary' to='/login'>Sign In Now</Link></small></p>
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

export default Register;