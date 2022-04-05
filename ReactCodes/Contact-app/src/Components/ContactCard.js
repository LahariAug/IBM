import React from "react";
import user from "../images/user.png"
const ContactCard  = (props) =>{
const {id,name,email} = props.contact;

//this gonna return jsx
return (  <div className ="item">
      <img className="ui avatar image" src={user} alt="user" />
<div className="content">
    <div className = "header">
        {name}
        {/* gonna use props to get contact mail and name */}
    </div>
    <div>{email}</div>
    {/* adding trash icon */}
    <i className = "trash alternate outline icon"
      style={{ color: "red", marginTop: "7px" }}
    //   notice the camelcase
    ></i>
    {/* adding inline style css */}

</div>
</div>);

}



export default ContactCard;