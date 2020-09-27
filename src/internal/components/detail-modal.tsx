import * as React from "react"
import { useState } from "react"
import { ClassNames } from "@emotion/core"
import CloseButton from "./closeButton"
import Modal from "react-modal"
import { css } from "@emotion/core"

const buttonStyle = css`
  background-color: white;
  border-radius: 2px 4px 2px;
  margin-bottom: 1em;
`

export const DetailModal = ({ children }) => {
  const [modalIsOpen, setIsOpen] = useState(false)
  function closeModal() {
    setIsOpen(false)
  }

  return (
    <>
      <button onClick={() => setIsOpen(true)} css={buttonStyle}>
        😉
      </button>
      <ClassNames>
        {({ css, cx }) => (
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setIsOpen(false)}
            overlayClassName={{
              base: "overlay-base",
              afterOpen: "overlay-after",
              beforeClose: "overlay-before",
            }}
            className={{
              base: "content-base",
              afterOpen: "content-after",
              beforeClose: "content-before",
            }}
            closeTimeoutMS={500}
            portalClassName={css`
              .overlay-base {
                padding: 1rem;
                position: fixed;
                top: 0;
                bottom: 0;
                right: 0;
                left: 0;
                background-color: rgba(0, 0, 0, 0);
                opacity: 0;
                transition-property: background-color, opacity;
                transition-duration: 1000ms;
                transition-timing-function: ease-in-out;
                outline: 0;
                display: flex;
                justify-content: center;
                align-items: center;
              }

              .overlay-after {
                background-color: black;
                opacity: 0.9;
              }

              .overlay-before {
                background-color: rgba(0, 0, 0, 0);
                opacity: 0;
              }

              .content-base {
                position: relative;
                top: auto;
                left: auto;
                right: auto;
                bottom: auto;
                margin: 1rem 1rem;
                padding: 0 1rem;
                border: 0;
                outline: 0;
                height: 0%;
                width: 0%;
                overflow: scroll;
                background-color: transparent;
                transition-property: background-color, width, height;
                transition-duration: 500ms;
                transition-timing-function: ease-in-out;
              }

              .content-after {
                width: 100%;
                height: 80%;
                outline: 1px solid;
              }

              .content-before {
                width: 0%;
                height: 0%;
                background-color: transparent;
              }
            `}
          >
            <CloseButton onClick={closeModal} />
            {children}
          </Modal>
        )}
      </ClassNames>
    </>
  )
}

Modal.setAppElement("body")
export default DetailModal
