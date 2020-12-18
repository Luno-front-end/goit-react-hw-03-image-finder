import React from "react";

import "../styles/styles.css";

function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
  // window.scrollTo({
  //   top: document.documentElement.scrollHeight,
  //   behavior: "smooth",
  // });
}
export default Button;
