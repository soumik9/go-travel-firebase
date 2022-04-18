import React from 'react';
import '../auth.css'
import {SiFacebook} from 'react-icons/si'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {FcGoogle} from 'react-icons/fc'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {

    let navigate = useNavigate();

    const [signInWithGoogle, user] = useSignInWithGoogle(auth);

    if(user){ navigate('/'); }

    return (
        <div className="form__socials mt-2 d-flex justify-content-center">
            <div className='mx-3'>
                <button>
                    <SiFacebook className='form__socials-icon facebook__icon' />
                </button>
            </div>
            <div className='mx-3'>
                <button>
                    <AiFillTwitterCircle className='form__socials-icon twitter__icon' />
                </button>
            </div>
            <div className='mx-3'>
                <button onClick={() => signInWithGoogle()}>
                    <FcGoogle className='form__socials-icon google__icon' />
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;