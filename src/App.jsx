import React, { useEffect, useState } from "react";
import ColorfulMessage from "./componemts/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [show, setShow] = useState(true);

  const onClickButton = () => {
    setNum(num + 1);
  };

  const onClickShow = () => {
    setShow(!show);
  };

  //最初の一回だけ
  // useEffect(() => {
  //   console.log(222);
  // }, []);

  //numが変化したときだけ
  useEffect(() => {
    if (num % 3 === 0) {
      show || setShow(true);
    } else {
      show && setShow(false);
    }
  }, [num]);

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
      <button onClick={onClickButton}>カウント</button>
      <button onClick={onClickShow}>on off</button>
      <p>{num}</p>
      {show && <p>絵文字表示</p>}
    </>
  );
};

export default App;
