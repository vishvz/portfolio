import React from "react";

function Layout({ children }) {
  return (
    <div className="mx-container">
      <h2 className="text-4xl bg-blue-300 mb-5">Projects</h2>
      {children}
    </div>
  );
}

export default Layout;
