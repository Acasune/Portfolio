import React from "react"

import { css, Global } from "@emotion/core"

export const GlobalCSS = () => (
  <Global
    styles={css`
      @import url("https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;900&display=swap");
      html {
        font-size: 62.5%;
        body {
          background-color: #090909;
          color: #fff;
          font-size: 2em;
          overflow-x: hidden;
          overscroll-behavior-y: none;
          font-family: -apple-system, "M PLUS Rounded 1c",
            " Hiragino Kaku Gothic ProN", "Lato", "メイリオ", Meiryo,
            "ＭＳ Ｐゴシック", sans-serif;
          @media screen and (max-width: 768px) {
            font-size: 1rem;
          }
          @media screen and (max-width: 480px) {
          }
        }
      }
    `}
  />
)

export default GlobalCSS
