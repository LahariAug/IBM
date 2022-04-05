import React from "react"; //import react library
import './App.css';
import Header from "./Header";
import ContactList from "./ContactList";
import AddContact from "./AddContact";
function App() {
  const contacts = [ //array of data's
  {id:"1", name:"abc" , email:"abc@gmail.com",},
  {id:"2", name:"xyz" , email:"xyz@gmail.com",}
    ];
  return (
    <div className = "ui container">
      <Header/>
    {<><AddContact />
    <ContactList contacts ={contacts}/></>}
   </div>

  );
}

export default App;