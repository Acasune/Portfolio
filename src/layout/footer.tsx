import React from "react"

import styled from "@emotion/styled"

const Footer: React.FCX = ({ className }) => (
  <footer className={className}>
    Copyright © 2020 Acasune All Rights Reserved.
  </footer>
)

export const StyledFooter = styled(Footer)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 9vh;
  padding-bottom: 1vh;
  font-size: 12px;
  width: 100vw;
  color: #fff;
`

export default StyledFooter
