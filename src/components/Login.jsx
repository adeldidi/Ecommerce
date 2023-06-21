import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/actions/users";


const Login = () => {
    const [userData, setUserData] = useState({});
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(userData, navigate));
    }

  return (
    <>
         <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" placeholder="username"
                    onChange={handleChange}
                    name='username'
                />
                <input type="password" placeholder="password"
                    onChange={handleChange}
                    name='password'
                />
                <button type="submit">Log In</button>
            </form>
            </>
  );
};

export default Login;
