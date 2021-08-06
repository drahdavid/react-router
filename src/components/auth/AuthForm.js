import { useContext, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import AuthApi from "../../lib/auth-api";
import AuthContext from "../../store/auth.context";
import './AuthForm.css';

const AuthForm = () => {
    const [mode, setMode] = useState(false);
    const history = useHistory();


    const authCtx = useContext(AuthContext);

    const userInput = useRef();
    const passwordInput = useRef();

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const result = await AuthApi(
            userInput.current.value,
            passwordInput.current.value,
            mode
        );
        authCtx.login(result);

        if (result?.idToken) history.replace('/');
    }

    return (
        <div>
            <button onClick={() => setMode(!mode)} className="mode">{mode ? 'Create an Account' : 'Login with existing account'}</button>
            <form onSubmit={handleFormSubmit} className="ui equal width form">
                <div className="fields">
                    <div className="field">
                        <label>Username</label>
                        <input ref={userInput} type="text" placeholder="Username" />
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <input ref={passwordInput} type="password" />
                    </div>
                    <button className="positive ui button">{!mode ? 'Register' : 'Login'}</button>
                </div>
            </form>
        </div >
    )
};

export default AuthForm;

