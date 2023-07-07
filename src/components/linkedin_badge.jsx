import React, { useEffect } from "react";

export default function Linkedin() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      class="badge-base LI-profile-badge"
      data-locale="en_US"
      data-size="medium"
      data-theme="dark"
      data-type="VERTICAL"
      data-vanity="sai-kumar-maddala"
      data-version="v1"
    >
      <a
        class="badge-base__link LI-simple-link"
        href="https://in.linkedin.com/in/sai-kumar-maddala?trk=profile-badge"
      >
        {" "}
      </a>
    </div>
  );
}
