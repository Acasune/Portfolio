import React from "react"

import { GlobalCSS } from "../styles/global-style"
import { StyledHeader as Header } from "./header"
import { StyledFooter as Footer } from "./footer"

export const Layout: React.FC = ({ children }) => (
  <>
    <GlobalCSS />
    <Header />
    {children}
    <Footer />
  </>
)

export default Layout
