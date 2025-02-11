import React from "react";

const handleSaveContact = async () => {
    if ("contacts" in navigator && "write" in navigator.contacts) {
      try {
        const contact = {
          name: ["Santosh"],
          tel: ["+919347744815"],
          email: ["sunny962002@gmail.com"],
        };
  
        await navigator.contacts.write([contact]);
        alert("Contact saved!");
      } catch (error) {
        console.error("Error saving contact:", error);
      }
    } else {
      alert("Contact API not supported on this device.");
    }
  };
  
  const SaveContactButton = () => {
    return <button onClick={handleSaveContact}>Save Contact</button>;
  };
  
  export default SaveContactButton;
  