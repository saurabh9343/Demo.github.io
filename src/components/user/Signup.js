import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";

const Signup = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Step 1: Create user in Firebase Auth
            const signupData = await createUserWithEmailAndPassword(
                auth,
                formData.email,
                formData.password
            );
            const user = signupData.user;

            // Step 2: Store extra data in Firestore
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                name: formData.name,
                email: formData.email
            });

            console.log("✅ Signup successful:", user.email);
            alert("Signup Successful!");
            navigate("/login");
        } catch (error) {
            console.error("❌ Error signing up:", error.message);
            alert(error.message);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 border p-4 rounded shadow">
                    <div className="text-center bg-info p-2 rounded mb-3">
                        <h3 className="fw-bold">Signup User</h3>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label fw-bold">Name</label>
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

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

                        <button type="submit" className="btn btn-info w-100">
                            Sign Up
                        </button>
                        <p className="mt-3 text-center">
                            Already have an account?{" "}
                            <Link to="/login" className="text-decoration-none">
                                Login
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
