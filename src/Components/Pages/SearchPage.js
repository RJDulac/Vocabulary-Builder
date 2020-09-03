import React from "react";

function SearchPage({ children }) {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Search</h1>
      {children}
    </div>
  );
}
export default SearchPage;
