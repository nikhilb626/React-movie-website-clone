import './App.css';
import React from "react";
import {Route} from "react-router-dom";
import HomeScreen from "./screens/homeScreen";
import ContentDetails from "./screens/contentDetails";

function App() {
  return (
    <>
    <Route path="/" component={HomeScreen} exact />
    <Route path="/content/:id" component={ContentDetails} exact />

    </>
  );
}

export default App;
