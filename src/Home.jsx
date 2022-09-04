import React from 'react'
import { ContextHolder } from '@frontegg/rest-api';
import { useAuth } from "@frontegg/react";

export default function About(props) {
  const { user} = useAuth();
  const logout = () => {
    const baseUrl = ContextHolder.getContext().baseUrl;
    alert(baseUrl)
    console.log(baseUrl)
    window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
  };
  return (
<div>
          <div>
            <h1>hwy</h1>
            <img src={user?.profilePictureUrl} alt={user?.name}/>
          </div>
          <div>
            <span>Logged in as: {user?.name}</span>
          </div>
          <div>
            <button onClick={() => alert(user.accessToken)}>What is my access token?</button>
          </div>
          <div>
            <button onClick={() => logout()}>Click to logout</button>
          </div>
        </div>
  )
}
