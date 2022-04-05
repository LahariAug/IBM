import React from "react";

const ContactList = (props) =>{ //default parameter props
   console.log(props);
   //create a function to render list.take props and map them and arrow function
   //gonna return jsx block
   const renderContactList = props.contacts.map((contact) => {
       return (
           <div className ="item">
               <div className="content">
                   <div className = "header">
                       {contact.name}
                   </div>
                   <div>{contact.email}</div>
                   {/* adding trash icon */}
                   <i className = "trash alternate outline icon"></i>
               </div>
           </div>
       );
   } );
   return (
        <div className="ui celled list">
            Contact List
            {/* reference variable in jsx .this is how to create and render a list in react*/}
            {renderContactList}
            </div>
    );
}

export default ContactList;