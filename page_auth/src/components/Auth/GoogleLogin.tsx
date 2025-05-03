import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../services/firebase";
import '../../assets/css/auth.css'

const Login = () => {
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Utilisateur connecté :", result.user);
    } catch (error) {
      console.error("Erreur de connexion :", error);
    }
  };


  return (
    <>
        <div className="auth_google_container">
            <img src="/google.png" className="auth_google_img"></img>
            {/* <input type="button" value="Se connecter avec Google" onClick={handleGoogleLogin} className="auth_google"></input> */}
            <div onClick={handleGoogleLogin} className="auth_google">Se connecter avec Google</div>
        </div>
    </>
  );


}

export default Login;