import * as React from "react"
import styled from "@emotion/styled"

const closeButton = ({ className, onClick }) => {
  return (
    <button className={className} onClick={() => onClick()}>
      ×
    </button>
  )
}

export const styledCloseButton = styled(closeButton)`
  margin: 0 0.3em;
  font-size: 3em;
  color: white;
  background: rgba(255, 0, 0, 0);
  border: 1px;
  cursor: pointer;
  position: fixed;
  right: 0.3em;
`

export default styledCloseButton
