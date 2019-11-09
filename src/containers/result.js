import React from "react";
import { connect } from "react-redux";

function Result(props) {
  return <div className="result container">Result page</div>;
}

export default connect()(Result);
