import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export const Neurotype = () => {
  const [quizState, setQuizState] = useState("opening");
  const [settings, setSettings] = useState({ questions: 48 });

  const Quiz = () => {
    switch (quizState) {
      case "settings":
        return <Settings onNext={setQuizState} setSettings={setSettings} />;
      default:
        return <OpeningText onNext={setQuizState} />;
    }
  };

  console.log(settings);

  return <Quiz />;
};

const OpeningText = (props) => {
  const { onNext } = props;

  return (
    <div style={{ textAlign: "center" }}>
      <p>Welcome! This is a quiz to help you define what your nerutype is.</p>
      <p>
        As with most internet quizzes, this is most likely NOT accurate. I
        highly recommend reading about neurtyping in{" "}
        <a href="https://reddit.com/r/neurotyping" target="_blank" rel="noopener noreferrer">the subreddit </a>
        or by watching the videos over at the neurotyping creator's channel,{" "}
        <a href="https://www.youtube.com/channel/UCHhnf3RgHabfk5f2gUX6EVQ" target="_blank" rel="noopener noreferrer">Digibro.</a>
      </p>
      <p>
        For this quiz, you'll rate how similar you believe your thought process
        to be to anime characters.
      </p>
      <p>
        If you don't know the character, or find yourself unable to relate to
        them in any way that would allow you to answer honestly, choose
        "Unsure".
      </p>
      <button className="btn btn-secondary" onClick={() => onNext("settings")}>
        Begin Quiz
      </button>
    </div>
  );
};

const Settings = (props) => {
  const { onNext, setSettings } = props;
  const [choice, setChoice] = useState("48");

  useEffect(() => {console.log(choice)},[choice])

  return (
    <div style={{ textAlign: "center" }}>
      <form>
        <div className="form-group">
          <label>Choose how many questions you'd like to answer.</label>
          <label>
            The more you choose, the more accurate will be the result.
          </label>
          <select
            className="form-control"
            value={choice}
            onChange={(e) => {
              setChoice(e.target.value);
            }}
          >
            <option value="16">16</option>
            <option value="32">32</option>
            <option value="48">48 (Recommended)</option>
            <option value="64">64</option>
            <option value="100">Take the full quiz</option>
          </select>
        </div>
      </form>
    </div>
  );
};

// const Question = () => {};