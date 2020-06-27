import * as React from "react"
import Link from "gatsby-link"
import Counter from "./counter"
import { StyledBackground } from "../internal/index/background"

const ListLink = (props: any) => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Index = () => (
  <div style={{ margin: `0 auto`, maxWidth: 650, padding: `1.25rem 1rem` }}>
    <header style={{ marginBottom: `1.5rem` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline` }}>MySweetSite</h3>
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </header>
    <h3>MySweetSite</h3>
    <Counter />
  </div>
)

export default () => {
  return (
    <div>
      <Index />
      <div id="test">
        <StyledBackground />
      </div>
    </div>
  )
}
