import React from "react"
import Link from "next/link";

function Error({ statusCode }) {
  return (
    <div>
      <p className="error">
        Upss!! Something when wrong
        <br/>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : 'An error occurred on client'}
      </p>
      <p className="back-link">Back to <Link href="/"><a>Main Page</a></Link></p>
      <style jxs>{`
      .error {
        border: 1px solid #eee;
        box-shadow: 0 2px 3px #ccc;
        padding: 20px;
        text-align: center;
      }
      .back-link {
        text-align: center;
      }
    `}</style>
    </div>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
