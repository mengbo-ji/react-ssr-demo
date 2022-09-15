import React from 'react';
import Home from '../containers/Home';
import About from '../containers/About';
import { Router, useRoutes } from 'react-router-dom';

const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
]

export const AppRoute = () => {
  const content = useRoutes(routes);
  return <>{content}</>
}
