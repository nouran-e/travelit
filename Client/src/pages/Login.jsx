
import '../styles/Login.scss';
import '../styles/Form.scss';
import AppLogo from '../components/AppLogo';
import ButtonPrimary from '../components/Button';
import { Link } from 'react-router-dom';

function LoginApp () {
    
    return (
        <section className="login">
            <AppLogo />
        <h1 className="heading">Login</h1>
        <form className="form-primary">
            <label name="username">
                <input id="username" placeholder="Enter your username" name="username" type="text" required />
            </label>
            <label name="password">
                <input id="password" placeholder="Enter your password" name="password" type="password" />
            </label>

            <ButtonPrimary btnClass={'button-blue button-primary'} btnText={'Login'} />
        </form>

        <p className="account-links">Don’t have an account? <Link to="/register"> Register</Link></p>

        </section>
    );

}
export default LoginApp;