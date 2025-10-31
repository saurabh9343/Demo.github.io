import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const Login = () => {
    // Step 1: Define state for email and password
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    // Step 2: Handle input change
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Step 3: Handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Step 4: Sign in using Firebase Auth
            await signInWithEmailAndPassword(
                auth,
                formData.email,
                formData.password
            );

            alert("Login Successful!");

            // Redirect to home page (or dashboard)
            navigate("/bank");

        } catch (error) {
            console.error("❌ Login error:", error.message);
            alert(error.message, " Invalid User ");
        }
    };

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3 border p-4 rounded shadow">
                        <div className="text-center bg-info p-2 rounded mb-3">
                            <h3 className="fw-bold">Login User</h3>
                        </div>
                        <form onSubmit={handleSubmit}>
                            {/* Email Input */}
                            <div className="mb-3">
                                <label className="form-label fw-bold">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            {/* Password Input */}
                            <div className="mb-3">
                                <label className="form-label fw-bold">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    placeholder="Enter your password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="text-center">
                                <button type="submit" className="btn btn-info w-100">
                                    Login
                                </button>
                                <p className="mt-3">
                                    Don't have an account?{" "}
                                    <Link to="/signup" className="text-decoration-none">
                                        Sign up
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
