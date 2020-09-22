import * as React from "react"
import baseStyle from "../styles/base-style"
import Layout from "../components/layout"
import { StyledBackground } from "../internal/index/background"
import { StyledHeroImage } from "../internal/index/hero-image"
import ProfileCvMDX from "../internal/index/profile-cv.mdx"
import DetailModal from "../internal/contents/detail-modal.tsx"
import SkillsMDX from "../internal/index/skills.mdx"
import WorksMDX from "../internal/index/works.mdx"
import LikesMDX from "../internal/index/likes.mdx"
import ContactMDX from "../internal/index/contact.mdx"
import AboutMDX from "../internal/index/about.mdx"
import DetailAboutMDX from "../internal/details/about-this-website.mdx"
import DetailProfileCvMDX from "../internal/details/profile-and-cv.mdx"
import DetailSkillsMDX from "../internal/details/skills.mdx"
import DetailLikesMDX from "../internal/details/likes.mdx"

export default () => {
  return (
    <Layout>
      <StyledHeroImage />
      <ProfileCvMDX />
      <DetailModal>
        <DetailProfileCvMDX />
      </DetailModal>
      <AboutMDX />
      <DetailModal>
        <DetailAboutMDX />
      </DetailModal>
      <SkillsMDX />
      <DetailModal>
        <DetailSkillsMDX />
      </DetailModal>
      <WorksMDX />
      <LikesMDX />
      <DetailModal>
        <DetailLikesMDX />
      </DetailModal>
      <ContactMDX />
      <DetailModal>
        <DetailAboutMDX />
      </DetailModal>
      <StyledBackground />
    </Layout>
  )
}
