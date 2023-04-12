import React from "react";

const ColorfulMessage = (props) => {
  const { testcolor, children } = props;

  const contentStyle = {
    // color: props.testcolor,
    color: testcolor,
    fontSize: "18px"
  };

  // return <p style={contentStyle}>{props.message}</p>;
  // return <p style={contentStyle}>{props.children}</p>;
  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
