import * as React from "react"

import styled from "@emotion/styled"

import baseStyle from "../styles/base-style"

import { SEO } from "../components/seo"
import { StyledBackground } from "../internal/index/background"
import { StyledHeroImage } from "../internal/index/hero-image"
import {
  ProfileCv,
  AboutThisWebsite,
  Skills,
  Works,
  Likes,
  Contact,
} from "../internal/index"

const Index: React.FCX = ({ className }) => {
  return (
    <main className={className}>
      <StyledHeroImage />
      <ProfileCv />
      <AboutThisWebsite />
      <Skills />
      <Works />
      <Likes />
      <Contact />
    </main>
  )
}

const StyledIndex = styled(Index)`
  ${baseStyle};
`
export default () => {
  return (
    <>
      <SEO title="Top" pathname="/" />
      <StyledBackground />
      <StyledIndex />
    </>
  )
}
