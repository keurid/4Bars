import React from "react";
// import { useMutation } from '@apollo/client';
// import { Link } from 'react-router-dom';
// import { LOGIN } from '../utils/mutations';
// import Auth from '../utils/auth';
// import Signup from '../components/Signup';
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";

const App = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      wrapperCol={{ span: 12 }}
    >
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
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
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
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        {/* <a className="login-form-forgot" href="">
          Forgot password
        </a> */}
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="/signup">register now!</a>
      </Form.Item>
    </Form>
  );
};
export default App;

// const App = () => {
//   const [form] = Form.useForm();
//   const [clientReady, setClientReady] = useState(false);

//   // To disable submit button at the beginning.
//   useEffect(() => {
//     setClientReady(true);
//   }, []);
//   const onFinish = (values) => {
//     console.log('Finish:', values);
//   };
//   return (
//     <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish}>
//       <Form.Item
//         name="username"
//         rules={[
//           {
//             required: true,
//             message: 'Please input your username!',
//           },
//         ]}
//       >
//         <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
//       </Form.Item>
//       <Form.Item
//         name="password"
//         rules={[
//           {
//             required: true,
//             message: 'Please input your password!',
//           },
//         ]}
//       >
//         <Input
//           prefix={<LockOutlined className="site-form-item-icon" />}
//           type="password"
//           placeholder="Password"
//         />
//       </Form.Item>
//       <Form.Item shouldUpdate>
//         {() => (
//           <Button
//             type="primary"
//             htmlType="submit"
//             disabled={
//               !clientReady ||
//               !form.isFieldsTouched(true) ||
//               !!form.getFieldsError().filter(({ errors }) => errors.length).length
//             }
//           >
//             Log in
//           </Button>
//         )}
//       </Form.Item>
//     </Form>
//   );
// };
// export default App;

// function Login(props) {
//   const [formState, setFormState] = useState({ email: '', password: '' });
//   const [login, { error }] = useMutation(LOGIN);

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const mutationResponse = await login({
//         variables: { email: formState.email, password: formState.password },
//       });
//       const token = mutationResponse.data.login.token;
//       Auth.login(token);
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormState({
//       ...formState,
//       [name]: value,
//     });
//   };

//SIGN UP

//   return (
//     <div className="container my-1">
//       {/* <Link to="/signup">← Go to Signup</Link> */}

//       <h2>Login</h2>
//       <form onSubmit={handleFormSubmit}>
//         <div className="flex-row space-between my-2">
//           <label htmlFor="email">Email Address:</label>
//           <input
//             name="email"
//             type="email"
//             id="email"
//             onChange={handleChange}
//           />
//         </div>
//         <div className="flex-row space-between my-2">
//           <label htmlFor="pwd">Password:</label>
//           <input
//             name="password"
//             type="password"
//             id="pwd"
//             onChange={handleChange}
//           />
//         </div>
//         {error ? (
//           <div>
//             <p className="error-text">The provided credentials are incorrect</p>
//           </div>
//         ) : null}
//         <div className="flex-row flex-end">
//           <button type="submit">Submit</button>
//         </div>
//       </form>
//       <Signup />
//     </div>
//   );
// }

// export default Login;
