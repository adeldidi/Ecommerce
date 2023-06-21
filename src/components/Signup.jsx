import React from 'react'
import { useState } from "react";
import { register } from "../redux/actions/users";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
    const [userData, setUserData] = useState({});
    const dispatch = useDispatch();
    const handleChange = (e) => {

        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }
    const [isValidate, setIsValidate] = useState(false);
    console.log(userData);
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (userData.password === userData.confirmPassword) {
            setIsValidate(!isValidate);
        }
        delete userData.confirmPassword;
        dispatch(register(userData, navigate, dispatch));
    }

    return (
        <div>
           
           <div>
            SignUp
            <form onSubmit={(e) => handleSubmit(e)}
            >
                <input type="text" placeholder="username" name='username'
                    onChange={handleChange}
                />
                <input type="password" placeholder="password"

                    name='password'
                    onChange={handleChange}
                />
                <input type="password" placeholder="confirm password"
                    name='confirmPassword'
                    onChange={handleChange}
                />
                <button type="submit">Sign Up</button>
            </form>
            {!isValidate && <p>password not match</p>}
        </div>
    
        </div>
    )
}

export default Signup