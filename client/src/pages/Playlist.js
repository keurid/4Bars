import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import SavedPlaylist from '../components/SavedPlaylist/SavedPlaylist'
import PlaylistForm from '../components/PlaylistForm/PlaylistForm';
import Auth from "../utils/auth";

// import { Form, Input, Button } from "antd";

import { useMutation } from "@apollo/client";
import  { CREATE_PLAYLIST } from "../utils/mutations"

import { QUERY_USER, QUERY_ME } from '../utils/queries';
import { useQuery } from '@apollo/client';

// const fakePlaylist = [{name:"chris", description:"ta",songs:["lover not a fighter"]},{name:"emma", description:"ta",songs:["lover not a fighter"]},{name:"jessica", description:"ta",songs:["lover not a fighter"]}]
const PlaylistPage = () => {
  const { username: userParam } = useParams();
  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });


  const user = data?.me || data?.user || {};
  const playlist = user.playlist || [];
  // console.log(user.playlist);
  // console.log(user.playlist);
  // console.log(playlist);
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/playlist" />;
  }


  
  

 
  // navigate to personal profile page if username is yours


  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }



  

  return (
    <div>
      <div>
        <PlaylistForm />
      </div>
      <div>
        <SavedPlaylist
          // playlists={playlist}
          // name={user.Playlist.name}
        />

      </div>
    </div>
  )
};


export default PlaylistPage;
