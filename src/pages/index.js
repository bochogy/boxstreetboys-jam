import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Box Break # 1</h1>    
    <StaticImage
      src="../images/logo.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Boxstreet Boys Logo"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>Register here</p>    
    <RegisterForm></RegisterForm>
    <p>
      Participants List
    </p>
    <p>
      Placeholder content here
    </p>
    
  </Layout>
)

export default IndexPage

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert(this.state.value + ': has a big bird.');
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}