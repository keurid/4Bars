import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";
import { LockOutlined, UserOutlined, MailOutlined  } from "@ant-design/icons";

const Signup = () => {
  const [form] = Form.useForm();

  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [addUser, { error, data }] = useMutation(ADD_USER);

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
      const { data } = await addUser({
        variables: {
          username: formState.username,
          email: formState.email,
          password: formState.password,
        },
      });
      console.log(data);
      Auth.login(data.createUser.token);
    } catch (error) {
      console.error(error);
    }
  };

  const headingStyle = {
    fontFamily: "Satisfy, cursive",
    color: "#c5f7ff",
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
      <h1 style={headingStyle}>Signup</h1>
      <Form
        form={form}
        name="signup_form"
        onFinish={handleFormSubmit}
        scrollToFirstError
      >
        <Form.Item
          value={formState.username}
          onChange={handleChange}
          rules={[{ required: true, message: "Please input a username!" }]}
        >
          <Input
            placeholder="Username"
            name="username"
            prefix={<UserOutlined className="site-form-item-icon" />}
          />
        </Form.Item>

        <Form.Item
          value={formState.email}
          onChange={handleChange}
          rules={[
            {
              type: "email",
              message: "The input is not a valid email address!",
            },
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input placeholder="Email" name="email"  prefix={<MailOutlined className="site-form-item-icon" />}/>
        </Form.Item>

        <Form.Item
          value={formState.password}
          onChange={handleChange}
          
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password placeholder="Password" name="password"  prefix={<LockOutlined className="site-form-item-icon" />}/>
        </Form.Item>

        <Form.Item>
          <Button type="primary" style={buttonStyle} htmlType="submit">
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Signup;
