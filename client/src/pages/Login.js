import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";

const Login = () => {
  const [form] = Form.useForm();

  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [login, { error, data }] = useMutation(LOGIN);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async () => {
    try {
      console.log(formState);
      const { data } = await login({
        variables: {
          username: formState.username,
          email: formState.email,
          password: formState.password,
        },
      });
      console.log(data);
      Auth.login(data.login.token);
    } catch (error) {
      console.error(error);
    }
  };
  const headingStyle = {
    fontFamily: "Satisfy, cursive",
    color: "#c5f7ff",
  };

  const textStyle = {
    color: "white",
    fontFamily: "Alata, sans-serif",

  };

  const buttonStyle = {
    background: '#191970',
    borderColor: '#F5FFFA',
    color: '#c5f7ff',
    fontFamily: "Alata, sans-serif",
    // padding: '5px 25px',
    fontSize: '15px',
    textAlign: 'center',
  };
  return (
    
    <div style={{ width: "300px", margin: "auto", marginTop: "100px" }}>
      
    <Form
      form={form}
      name="normal_login"
      onFinish={handleFormSubmit}
      className="login-form"
      initialValues={{
        remember: true,
      }}
      wrapperCol={{ span: 100 }}
    >
      <h1 style={headingStyle}>Login</h1>
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your Username!",
          },
        ]}
      >
        <Input
          onChange={handleChange}
          value={formState.username}
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
          name="username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
      >
        <Input
          onChange={handleChange}
          value={formState.password}
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          name="password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox style={textStyle}>Remember me</Checkbox>
        </Form.Item>

        {/* <a className="login-form-forgot" href="">
          Forgot password
        </a> */}
      </Form.Item>

      <Form.Item>
        <Button type="primary" style={buttonStyle} htmlType="submit" className="login-form-button">
          Log in
        </Button>
        <span style={{ margin: "0 10px"}}>Or</span>
         <a href="/signup" style={textStyle}>register now!</a>
      </Form.Item>
    </Form>
    </div>
  );
};
export default Login;
