import * as React from "react"
import DetailModal from "../components/detail-modal.tsx"
import ProfileCvMDX from "./profile-cv.mdx"
import AboutThisWebsiteMDX from "./about-this-website.mdx"
import SkillsMDX from "./skills.mdx"
import WorksMDX from "./works.mdx"
import LikesMDX from "./likes.mdx"
import ContactMDX from "./contact.mdx"
import DetailProfileCvMDX from "../details/profile-and-cv.mdx"
import DetailAboutThisWebsiteMDX from "../details/about-this-website.mdx"
import DetailSkillsMDX from "../details/skills.mdx"
import DetailLikesMDX from "../details/likes.mdx"
import DetailContactMDX from "../details/contact.mdx"

export const ProfileCv = () => (
  <>
    <ProfileCvMDX />
    <DetailModal>
      <DetailProfileCvMDX />
    </DetailModal>
  </>
)

export const AboutThisWebsite = () => (
  <>
    <AboutThisWebsiteMDX />
    <DetailModal>
      <DetailAboutThisWebsiteMDX />
    </DetailModal>
  </>
)

export const Skills = () => (
  <>
    <SkillsMDX />
    <DetailModal>
      <DetailSkillsMDX />
    </DetailModal>
  </>
)

export const Works = () => (
  <>
    <WorksMDX />
  </>
)

export const Likes = () => (
  <>
    <LikesMDX />
    <DetailModal>
      <DetailLikesMDX />
    </DetailModal>
  </>
)

export const Contact = () => (
  <>
    <ContactMDX />
    <DetailModal>
      <DetailContactMDX />
    </DetailModal>
  </>
)
