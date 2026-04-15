import React from 'react';
import { createBrowserRouter } from 'react-router';
import Home from '../Component/HomePage/Home';
import Root from '../Root/Root';
import FriendDetails from '../Component/FriendDetails';
import Timeline from '../Component/TimeLine/Timeline';
import Dashboard from '../Component/Dashborad/Dashboard';

export const router = createBrowserRouter([
  {
    path:'/',
    Component:Root,
    children:[
      {index:true, Component:Home},
      {path:'/friend/:friendId', Component:FriendDetails},
      {path:'/notification', Component:Timeline},
      {path:'/dashboard', Component:Dashboard}
    ]
  }
])