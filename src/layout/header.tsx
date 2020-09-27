import React from "react"

import styled from "@emotion/styled"

const Header: React.FCX = ({ className }) => <header className={className} />

export const StyledHeader = styled(Header)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`

export default StyledHeader
