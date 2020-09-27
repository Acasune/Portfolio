import * as React from "react"
import styled from "@emotion/styled"
import AcasunePNG from "../../images/acasune.png"

const HeroImage = ({ className }) => (
  <div className={className}>
    <h1>Welcome to Acasune's Portofolio Website</h1>
    <img src={AcasunePNG} />
  </div>
)

export const StyledHeroImage = styled(HeroImage)`
  text-align: center;
  margin: 30px auto 50px;
  h1 {
    margin: 10px 20px;
  }
  img {
    width: 200px;
    height: 200px;
  }
  @media screen and (max-width: 768px) {
    h1 {
      margin: 10px 20px;
    }
    img {
      width: 150px;
      height: 150px;
    }
  }
`

export default StyledHeroImage
