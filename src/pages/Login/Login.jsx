import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../../Container/InputContainer";
import axiosCall from "../../api/useLogin";
import UserContext from "../../App";

const Login = () => {
  let token = useContext(UserContext);
  let setToken = useContext(UserContext);
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const LoginHandler = async () => {
    const data = await axiosCall(userName, password, setError);
    setToken = data;
  };

  useEffect(() => {
    if (token) {
      console.log("token in login", token);
      navigate("/products");
    }
  }, [token]);

  return (
    <div className="body">
      <Container
        userName={userName}
        setUserName={setUserName}
        password={password}
        setPassword={setPassword}
        LoginHandler={LoginHandler}
      />
    </div>
  );
};

export default Login;
