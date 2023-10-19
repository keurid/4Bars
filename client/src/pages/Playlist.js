import React, { useState } from 'react';
import { useMutation } from "@apollo/client";
import PlaylistForm from '../components/PlaylistForm/PlaylistForm';
import SavedPlaylist from '../components/SavedPlaylist/SavedPlaylist'
import  { CREATE_PLAYLIST } from "../utils/mutations"
import Auth from "../utils/auth";
import { Form, Input, Button } from "antd";



const Playlist = () => {
  const [form] = Form.useForm();

  const [formState, setFormState] = useState({
    name: "",
    description: ""
  });

const [CreatePlaylist, {error, data}] = useMutation(CREATE_PLAYLIST);

const handleChange = (event) => {
  const { name, value } = event.target;
  setFormState({
    ...formState,
    [name]: value,
  });
};

  const handleFormSubmit = async () => {
    const token = Auth.loggedIn()?Auth.getToken():null
    if (!token) {
      return false;
    }
    console.log(token)
    console.log(Auth.getProfile)
    try {
      console.log(formState);
      const { data } = await CreatePlaylist({
        variables: {
          name: formState.name,
          description: formState.description,
        },
      });
      console.log(data);
      Auth.getToken();
    } catch (error) {
      console.error(error);
    }
  };

  const buttonStyle = {
    background: '#191970',
    borderColor: '#F5FFFA',
    color: '#c5f7ff',
    fontFamily: "Alata, sans-serif",
    // padding: '5px 25px',
    fontSize: '15px',
    textAlign: 'center',
  }

  return (
    <Form 
    form = {form}
    onFinish={handleFormSubmit}
    >
        <Form.Item>
         <p>Playlist Name: </p> 
          <Input
            type="text"
            value={formState.name}
            onChange={handleChange}
            name="name"
            />
      </Form.Item>
      <Form.Item>
       <p> Description!</p>
        <Input
            type="text"
            value={formState.description}
            onChange={handleChange}
            name="description"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" style={buttonStyle} htmlType="submit" className="login-form-button">
          Create Playlist!
        </Button>
      </Form.Item>
      <div >
      <SavedPlaylist></SavedPlaylist>
      </div>
    </Form>
  );
};


export default Playlist;
