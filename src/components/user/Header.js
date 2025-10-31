import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";

const Header = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Real-time listener for auth changes
        const unsubscribe = onAuthStateChanged(auth, (userData) => {
            setUser(userData);
        });

        // Clean up the listener when Header unmounts
        return () => unsubscribe();
    }, []);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-info disabled ">
            <div className="container-fluid m-3 ">
                <h1 className="navbar-brand">MARROW</h1>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active m-2" aria-current="page" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link m-2" to="/about">
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link m-2" to="/contact">
                                Contact
                            </Link>
                        </li>

                        {user ? (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link m-2" to="/bank">
                                        Bank
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link m-2" to="/logout">
                                        Logout
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link m-2" to="/login">
                                        Login
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link m-2" to="/signup">
                                        Sign-Up
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>

                    <form className="d-flex">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-success" type="submit">
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Header;
