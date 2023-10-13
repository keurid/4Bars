import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';


export default function App(){
  return(
    <main>
      <Header />
      <Footer />
    </main>
  )
}