import React from "react";

const SaveContactButton = () => {
  return (
    <a href="/contact.vcf" download="contact.vcf">
      <button>Save Contact</button>
    </a>
  );
};

export default SaveContactButton;

  