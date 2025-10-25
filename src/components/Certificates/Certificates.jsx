import React from "react";
import "./Certificates.css";

const Certificates = () => {
  const certificateLinks = [
    {
      name: "CSS Certificate",
      link: "https://drive.google.com/file/d/1OjGZ8pdWP19VmhxexJ0GLxaqKLxhKTtl/view?usp=drive_link",
    },
    {
      name: "Frontend Development Certificate",
      link: "https://drive.google.com/file/d/1OjV13bZaCj9b-b8zYqk7kZeQdmEUsGOi/view?usp=drive_link",
    },
    {
      name: "C Training Certificate",
      link: "https://drive.google.com/file/d/1bUxCKiJQtMIPlcvmuzoMAogpW0cahj2b/view?usp=drive_link",
    },
    {
      name: "CPP Training Certificate",
      link: "https://drive.google.com/file/d/1txt861lNZlwq2A_rD-nZG-iITd48Y-fP/view?usp=drive_link",
    },
    {
      name: "Basic Python completion certificate",
      link: "https://drive.google.com/file/d/1OWVDxi-18O1HoW_fE0UC5mB0PaHeL1Pn/view?usp=drive_link",
    },
  ];

  return (
    <div id="certificates" className="certificates">
      <h1>My Certificates</h1>
      <div className="certificates-container">
        {certificateLinks.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="cert-btn"
          >
            {cert.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
