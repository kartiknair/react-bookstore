import React from "react";
import ReactLoading from "react-loading";

function Loading({ type, color, loading }) {
  if (loading) {
    return (
      <div id="loading">
        <ReactLoading type={type} color={color} height={"10%"} width={"10%"} />
        <p
          className="loading-text"
          style={{ color: "#363636", fontWeight: "600" }}
        >
          Loading...
        </p>
      </div>
    );
  } else {
    return null;
  }
}

export default Loading;
