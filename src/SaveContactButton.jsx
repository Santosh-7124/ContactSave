const SaveContactButton = () => {
  return (
    <a
      href="data:text/vcard;charset=utf-8,BEGIN:VCARD%0AVERSION:3.0%0AFN:John Doe%0ATEL:+1234567890%0AEMAIL:john.doe@example.com%0AEND:VCARD"
      download="JohnDoe.vcf"
    >
      <button>Save Contact</button>
    </a>
  );
};

export default SaveContactButton;
