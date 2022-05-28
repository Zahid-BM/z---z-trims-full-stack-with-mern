import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Loading';
import auth from '../../../../firebase.init';
import useToken from '../../../../hooks/useToken';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const [token] = useToken(user || user1);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";



    if (token) {
        navigate(from, { replace: true });
    };
    const handleGoogleSignIn = () => {
        signInWithGoogle();
    };
    if (loading || loading1) {
        return <Loading></Loading>;
    };
    return (
        <div>
            <div className='d-flex  align-items-center my-3'>
                <div className='w-75'><hr /></div>
                <div className='mx-3'>OR</div>
                <div className='w-75'><hr /></div>
            </div>
            <p className='text-danger' >{error?.message || error1?.message}</p>
            <div className="d-grid gap-2">
                <Button onClick={handleGoogleSignIn} variant="secondary" size="lg">
                    <img className='me-4' src={'image3'} alt="" /> Google Signup
                </Button>
                <Button onClick={() => signInWithGithub()} variant="secondary" size="lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="currentColor" className="bi bi-github me-4" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>  GitHub Signup
                </Button>

            </div>
        </div>
    );
};

export default SocialLogin;