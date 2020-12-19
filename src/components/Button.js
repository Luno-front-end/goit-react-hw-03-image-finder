import React from "react";

import "../styles/styles.css";

function Button({ children, onClick }) {
  return (
    <div className="containerBtn-loadMore">
      <button className="Button" onClick={onClick}>
        {children}
      </button>
    </div>
  );
  // window.scrollTo({
  //   top: document.documentElement.scrollHeight,
  //   behavior: "smooth",
  // });
}
export default Button;
