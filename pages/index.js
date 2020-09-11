import React, { Component } from "react"
import Link from "next/link";
import Router from "next/router";

class IndexPage extends Component {
  // Next special LifeCycle
  static async getInitialProps(ctx) {
    let data = {};
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const json = await res.json()
    data = {
      stars: json.stargazers_count,
      appName: 'My Super NextJS App'
    }
    console.log(data)
    return data
  }

  render() {
    return (
      <div>
        <h1>Main Page of {this.props.appName}</h1>
        <p>Go to <Link href="/auth"><a>Auth Page</a></Link></p>
        <button onClick={() => Router.push('/auth')}>Auth Page</button>
        <div><br/>Next stars: {this.props.stars}</div>
      </div>
    )
  }
}
export default IndexPage
