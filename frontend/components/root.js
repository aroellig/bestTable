import React from "react"
import App from "./app"
import { Provider } from 'react-redux';
import {
   Route,
   Redirect,
   Switch,
   Link,
   HashRouter,
   BrowserRouter
 } from 'react-router-dom';


 const Root = (props) => {
    return (
    <Provider store={props.store}> 
       <BrowserRouter>
          <App/>
       </BrowserRouter>
    </Provider>
    )
 }

export default Root