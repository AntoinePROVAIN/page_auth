import { useNavigate } from 'react-router-dom'
import '../assets/css/auth.css'


function AuthPage() {
    const nav = useNavigate();

    const handleClick = () => {
        nav("/inscription");
    }

    return (
        <>
            <div className='authComponent_wrapper'>
                <div className="authComponent_container">
                    <div className='authComponent_content'>
                        <h2 className='auth_title'>Authentification</h2>
                        <form action="">
                            <input type='text' id="username" name='username' placeholder='Username' className='auth_input'></input>
                            <input type='password' id='pwd' name='pwd' placeholder='Password' className='auth_input'></input>
                            <div className='auth_buttons'>
                                <input type='button' value="Connexion" className='auth_button'></input>
                                <input type='button' value="Inscription" className='auth_button' onClick={handleClick}></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AuthPage
  