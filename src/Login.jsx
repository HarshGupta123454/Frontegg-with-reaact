import React from 'react'
import { useLoginWithRedirect } from "@frontegg/react";
import {useNavigate} from "react-router-dom"


export default function Login() {
  const navigate = useNavigate();
  
  const loginWithRedirect = useLoginWithRedirect();
  return (
    <div>
      <h1>hello world</h1>
          <button onClick={() => loginWithRedirect()}>Click me to login</button>
        </div>
  )
}
