import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";
import "./contact-info.css";

function ContactInfo() {
  return (
    <div className="contact-info">
      <div>
        <FaMapMarkerAlt size="3em" color="cornflowerblue" />
        <p>Taipei , Twiwan</p>
      </div>
      <div>
        <FaRegEnvelope size="3em" color="cornflowerblue" />
        <a href="mailto:knight123g@gmail.com">knight123g@gmail.com</a>
      </div>
      <div>
        <FaPhoneAlt size="3em" color="cornflowerblue" />
        <a href="tel:0932007662">(886) 932-007-662</a>
      </div>
    </div>
  );
}

export default ContactInfo;
