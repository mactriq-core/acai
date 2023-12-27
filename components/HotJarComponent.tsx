// HotjarComponent.js
import { useEffect } from "react";
import { hotjar } from "react-hotjar";

function HotjarComponent() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      hotjar.initialize(3806906, 6);
      // Additional Hotjar tracking code
      hotjar.identify("USER_ID", { userProperty: "" });
      hotjar.event("button-click");
      hotjar.stateChange("/");
      hotjar.identify("USER_ID", { userProperty: "value" });
    }
  }, []);

  return null; // This component doesn't render anything
}

export default HotjarComponent;
