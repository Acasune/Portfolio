import React from 'react';
import Layout from "./src/layout/layout"
const wrapWithProvider = ({ element }) => (
  <Layout>{element}</Layout>
);

export const wrapRootElement = wrapWithProvider;
