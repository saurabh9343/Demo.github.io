// pages/Logout.js
import React, { useEffect } from "react";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logoutUser = async () => {
      try {
        await signOut(auth);
        alert("Logged out successfully!");
        navigate("/login");
      } catch (error) {
        console.error("Error logging out:", error);
      }
    };

    logoutUser();
  }, [navigate]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h3>Logging out...</h3>
    </div>
  );
};

export default Logout;
