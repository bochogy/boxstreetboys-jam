import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Box Break # 1</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/logo.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Boxstreet Boys Logo"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      Participants List
    </p>
    <p>
      Placeholder content here
    </p>
  </Layout>
)

export default IndexPage
