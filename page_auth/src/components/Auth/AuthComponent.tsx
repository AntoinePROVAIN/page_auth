import { useNavigate } from 'react-router-dom'
import '../../assets/css/auth.css'

import Login from './GoogleLogin';

function AuthPage() {
    const nav = useNavigate();

    const handleClick = () => {
        nav("/inscription");
    }

    return (
        <>
           <div className='authComponent_wrapper flex flex-col items-center justify-center min-h-screen p-4 md:p-8'>
                <div className="authComponent_container w-full max-w-md bg-white shadow-md rounded-lg p-6">
                    <div className='authComponent_content'>
                        <h2 className='auth_title text-center text-2xl font-bold mb-4'>Authentification</h2>
                        <Login />
                        <div className='or text-center my-4'>ou</div>
                        <form>
                            <input
                                type='text'
                                id="username"
                                name='username'
                                placeholder='Username'
                                className='auth_input w-full mb-3 p-2 border rounded'
                            />
                            <input
                                type='password'
                                id='pwd'
                                name='pwd'
                                placeholder='Password'
                                className='auth_input w-full mb-3 p-2 border rounded'
                            />
                            <div className='auth_buttons flex flex-col md:flex-row justify-between gap-4'>
                                <input
                                    type='button'
                                    value="Connexion"
                                    className='auth_button w-full md:w-1/2 py-2 bg-blue-500 text-white rounded'
                                />
                                <input
                                    type='button'
                                    value="Inscription"
                                    className='auth_button w-full md:w-1/2 py-2 bg-gray-500 text-white rounded'
                                    onClick={handleClick}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </>
    )
}

export default AuthPage
  