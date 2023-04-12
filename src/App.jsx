import React from "react";
import ColorfulMessage from "./componemts/ColorfulMessage";

const App = () => {
  const onClickButton = () => {
    alert();
  };

  const contentLedyStyle = {
    color: "pink",
    fontSize: "18px"
  };

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage testcolor="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage testcolor="pink" message="お元気です!" />
      {/* <p style={contentLedyStyle}>元気です</p> */}
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
