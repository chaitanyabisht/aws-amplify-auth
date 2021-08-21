import React from "react";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import './App.css'

import { AmplifyAuthenticator, AmplifySignUp, AmplifySignIn, AmplifySignOut } from '@aws-amplify/ui-react';


Amplify.configure(awsconfig);

const App = () => {
  return (
    <AmplifyAuthenticator usernameAlias="email">
      <AmplifySignUp
        slot="sign-up"
        usernameAlias="username"
        formFields={[
          {
            type: "username",
            label: "Username",
            placeholder: "Enter Username",
            inputProps: { required: true, autocomplete: "username" },
          },
          {
            type: "email",
            label: "Email Address",
            placeholder: "Enter Email Address",
            inputProps: { required: true, autocomplete: "username" },
          },
          {
            type: "password",
            label: "Password",
            placeholder: "Enter Password",
            inputProps: { required: true, autocomplete: "new-password" },
          },
          {
            type: "phone_number",
            label: "Phone Number",
            placeholder: "Enter Phone Number",
          },
          {
            type: "name",
            label: "Name",
            placeholder: "Enter Name",
          },
          {
            type: "address",
            label: "Address",
            placeholder: "Enter Address",
          }
        ]} 
      />

      <AmplifySignIn slot="sign-in" usernameAlias="username" />

      <div className="App">
       <header className="App-header">
        <h2>Welcome to Cosmosnets</h2>
        <AmplifySignOut />
       </header>
     </div>
    
    </AmplifyAuthenticator>
    
  );
};

export default App;
