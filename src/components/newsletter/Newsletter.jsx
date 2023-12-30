import React, { useEffect } from "react";

const Newsletter = () => {
  useEffect(() => {
    // Dynamic script loading
    const script = document.createElement("script");
    script.src = "https://static-bundles.visme.co/forms/vismeforms-embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{ backgroundColor: "#fff" }}>
      <div
        className="visme_d"
        data-title="Company News Subscription"
        data-url="6x8m66e7-company-news-subscription"
        data-domain="forms"
        data-full-page="false"
        data-min-height="500px"
        data-form-id="8664"></div>
    </div>
  );
};

export default Newsletter;
