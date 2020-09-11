import React from "react"

const user = (props) =>
  <div className="user">
    <p>Name: {props.name}</p>
    <p>Last Name: {props.lastName}</p>
    <style jxs>{`
      .user {
        border: 1px solid #eee;
        box-shadow: 0 2px 3px #ccc;
        padding: 20px;
      }
      
      .user p {
        color: red;
      }
    `}</style>
  </div>


export default user
