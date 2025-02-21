import React from "react";
import "./Pingui.css";

function Pingui(props) {
  const { message } = props;

  return (
    <div className="FondoPingui">
      <div className="left-mountain"></div>
      <div className="back-mountain"></div>
      <div className="sun"></div>
      <div className="penguin">
        <div className="chat chat-end w-40 thinking">
          <div className="chat-bubble chat-bubble-warning">{message}</div>
        </div>
        <div className="penguin-head">
          <div className="face left"></div>
          <div className="face right"></div>
          <div className="chin"></div>
          <div className="eye left">
            <div className="eye-lid"></div>
          </div>
          <div className="eye right">
            <div className="eye-lid"></div>
          </div>
          <div className="blush left"></div>
          <div className="blush right"></div>
          <div className="beak top"></div>
          <div className="beak bottom"></div>
        </div>
        <div className="shirt">
          <div></div>
          <p></p>
        </div>
        <div className="penguin-body">
          <div className="arm left"></div>
          <div className="arm right"></div>
          <div className="foot left"></div>
          <div className="foot right"></div>
        </div>
      </div>

      <div className="ground"></div>
    </div>
  );
}

export default Pingui;
