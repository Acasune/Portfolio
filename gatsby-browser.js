import React from 'react';
import { NavContainer } from './src/store/NavContainer';
import Layout from "./src/components/layout"
const wrapWithProvider = ({ element }) => (
  <NavContainer.Provider>
    <Layout>{element}</Layout>
  </NavContainer.Provider>
);

export const wrapRootElement = wrapWithProvider;
