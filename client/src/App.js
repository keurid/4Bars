import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login.js";
import Home from "./pages/Home.js"; 
import About from "./pages/About.js"; 
import Signup from "./pages/Signup.js"
import Search from "./pages/Search.js"
import Playlist from "./pages/Playlist.js";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Nav from './components/Nav';

const httpLink = createHttpLink({
  uri: '/graphql', 
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/search" element={<Search />} />
          <Route path="/playlist" element={<Playlist />} />
        </Routes>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;