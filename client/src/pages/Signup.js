import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import AuthService from '../utils/auth';

const Signup = () => {
  const [form] = Form.useForm();

  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirm: '',
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
      
      const { data } = await addUser({
        variables: {
          firstName: formState.firstName,
          lastName: formState.lastName,
          email: formState.email,
          password: formState.password,
        },
      });

      AuthService.login(data.addUser.token);
    } catch (error) {
      console.error(error);
    }
  };

  const headingStyle = {
    fontFamily: 'Satisfy, cursive',
    color: '#c5f7ff',
  };

  return (
    <div style={{ width: '300px', margin: 'auto', marginTop: '100px' }}>
      <h2 style={headingStyle}>Signup</h2>
      <Form
        form={form}
        name="signup_form"
        onFinish={handleFormSubmit}
        scrollToFirstError
      >
        <Form.Item
          name="firstName"
          value={formState.name}
          onChange={handleChange}
          rules={[{ required: true, message: 'Please input a name!' }]}
        >
          <Input placeholder="First name" />
        </Form.Item>
        <Form.Item
          name="LastName"
          value={formState.lastName}
          onChange={handleChange}
          rules={[{ required: true, message: 'Please input a name!' }]}
        >
          <Input placeholder="Last name" />
        </Form.Item>
        <Form.Item

          name="email"
          value={formState.email}
          onChange={handleChange}
          rules={[
            {
              type: 'email',
              message: 'The input is not a valid email address!',
            },
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}
        >
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item

          name="password"
          value={formState.password}
          onChange={handleChange}
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item
          name="confirm"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error('The two passwords that you entered do not match!')
                );
              },
            }),
          ]}
        >
          <Input.Password placeholder="Confirm Password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Signup;


