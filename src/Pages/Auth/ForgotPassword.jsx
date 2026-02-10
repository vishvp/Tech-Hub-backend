import React from "react";

const ForgotPassword = () => {
    return (
        <div className="forgot-card">
            <h2>Forgot Password</h2>
            <p>Enter your registered email to reset your password</p>

            <form>
                <div className="form-group">
                    <label>Email Address</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                    />
                </div>

                <button type="submit" className="btn-primary">
                    Send Reset Link
                </button>
            </form>

            <div className="back-link">
                <a href="/login">← Back to Login</a>
            </div>
        </div>
    );
};

export default ForgotPassword;
