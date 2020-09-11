import React from "react"
import Link from "next/link";

import User from "../../components/User";

const authIndexPage = (props) =>
  <div>
    <h1>Auth Index Page of {props.appName}</h1>
    <User name="Orestes" lastName="Garcia Martinez"/>
    <p>Back to <Link href="/"><a>Main Page</a></Link></p>
  </div>;

authIndexPage.getInitialProps = context => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ appName: "My Super App (Auth)" });
    }, 1000);
  });
  return promise;
};

export default authIndexPage
