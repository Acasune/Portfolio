import * as React from "react"
import baseStyle from "../styles/base-style"
import Counter from "./counter"
import Layout from "../components/layout"
import { StyledBackground } from "../internal/index/background"
import { StyledHeroImage } from "../internal/index/hero-image"
import styled from "@emotion/styled"

export default () => {
  return (
    <Layout>
      <StyledHeroImage />
      <StyledBackground />
    </Layout>
  )
}
