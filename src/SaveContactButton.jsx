const handleSaveContact = () => {
  const vcfFilePath = "/contact.vcf"; // Path to your vCard file

  // Try to open it instead of downloading
  window.location.href = vcfFilePath;
};

const SaveContactButton = () => {
  return <button onClick={handleSaveContact}>Save Contact</button>;
};

export default SaveContactButton;
