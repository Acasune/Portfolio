import React from "react"

import { GlobalCSS } from "../styles/global-style"

export const Layout: React.FC = ({ children }) => (
  <>
    <GlobalCSS />
    {children}
  </>
)

export default Layout
