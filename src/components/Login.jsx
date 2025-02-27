import { Link } from 'react-router-dom';
import './login.css'

const Login = () => {


    return (
        <section className="form-container">
            <h1 className="form-title">Login to your account</h1>
            <form className="form">
                <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input


                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input


                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        className="form-input"
                        required
                    />
                </div>
                <Link to="/">
                    <button type="submit" className="form-btn">Login</button>
                </Link>
            </form>
            <div className="form-footer">
                Did you forget your password?{" "}
                <a to="/forgot-password" className="form-link">Forgot Password</a>
            </div>
        </section>
    );
};

export default Login;