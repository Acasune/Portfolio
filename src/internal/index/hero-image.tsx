import * as React from "react"
import styled from "@emotion/styled"
import AcasunePNG from "../../images/acasune.png"
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa"

const SocialLink = ({ className }) => (
  <div className={className}>
    <FaGithub />
    <FaTwitter />
    <FaLinkedinIn />
  </div>
)

const StyledSocialLink = styled(SocialLink)`
  display: flex;
  justify-content: center;
  width: 100%;
  * {
    width: 75px;
    height: 75px;
    padding: 10px 10px 0px;
  }
  @media screen and (max-width: 768px) {
    * {
      width: 30px;
      height: 30px;
      padding: 7.5px 7.5px 0px;
    }
  }
  @media screen and (max-width: 480px) {
  }
`
const HeroImage = ({ className }) => (
  <div className={className}>
    <h1>Welcome to Acasune's Portofolio Website</h1>
    <img src={AcasunePNG} />
    <StyledSocialLink />
  </div>
)

export const StyledHeroImage = styled(HeroImage)`
  text-align: center;
  h1 {
    padding: 100px 20px 50px;
  }
  img {
    width: 200px;
    height: 200px;
  }
  @media screen and (max-width: 768px) {
    h1 {
      padding: 50px 20px 50px;
    }
    img {
      width: 150px;
      height: 150px;
    }
  }
`

export default StyledHeroImage
