import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CHARACTERS = [
  {
    imageUrl: "url",
    characterInfo: { name: "senjogahara", series: "series" },
    characterType: { lateral: "lat", impressionistic: "imp" },
  },
  {
    imageUrl: "url",
    characterInfo: { name: "hanekawa", series: "series" },
    characterType: { lateral: "lat", impressionistic: "imp" },
  },
  {
    imageUrl: "url",
    characterInfo: { name: "mayoi", series: "series" },
    characterType: { lateral: "lat", impressionistic: "imp" },
  },
  {
    imageUrl: "url",
    characterInfo: { name: "kanbaru", series: "series" },
    characterType: { lateral: "lat", impressionistic: "imp" },
  },
  {
    imageUrl: "url",
    characterInfo: { name: "shinobu", series: "series" },
    characterType: { lateral: "lat", impressionistic: "imp" },
  },
];

export const Neurotype = () => {
  const [quizState, setQuizState] = useState("opening");
  const [settings, setSettings] = useState({ questions: 48 });
  const [finalResult, setFinalResult] = useState({
    lateral: 0,
    impressionistic: 0,
  });

  const Quiz = () => {
    switch (quizState) {
      case "questions":
        return (
          <Questions onNext={setQuizState} setFinalResult={setFinalResult} />
        );
      case "settings":
        return (
          <Settings
            onNext={setQuizState}
            setSettings={setSettings}
            settings={settings}
          />
        );
      default:
        return <OpeningText onNext={setQuizState} />;
    }
  };

  return <Quiz />;
};

const OpeningText = (props) => {
  const { onNext } = props;

  return (
    <div style={{ textAlign: "center" }}>
      <p>Welcome! This is a quiz to help you define what your neurotype is.</p>
      <p>
        As with most internet quizzes, this is most likely NOT accurate. I
        highly recommend reading about neurtyping in{" "}
        <a
          href="https://reddit.com/r/neurotyping"
          target="_blank"
          rel="noopener noreferrer"
        >
          the subreddit{" "}
        </a>
        or by watching the videos over at the neurotyping creator's channel,{" "}
        <a
          href="https://www.youtube.com/channel/UCHhnf3RgHabfk5f2gUX6EVQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          Digibro.
        </a>
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
  const { onNext, setSettings, settings } = props;

  return (
    <div style={{ textAlign: "center" }}>
      <form>
        <div className="form-group">
          <label>Choose how many questions you'd like to answer.</label>
          <label>The more you choose, the more accurate the result.</label>
          <select
            className="form-control"
            value={settings.questions.toString()}
            onChange={(e) => {
              setSettings({ questions: parseInt(e.target.value) });
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
      <button
        className="btn btn-secondary"
        onClick={() => {
          onNext("questions");
        }}
      >
        Next
      </button>
    </div>
  );
};

const CurrentQuestion = (props) => {
  const { imageUrl, characterInfo, characterType, onSubmit, results } = props;
  const [currentAnswer, setCurrentAnswer] = useState(0);

  return (
    <>
      <small>How much do you relate to this character's way of thinking?</small>
      <div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id="0"
            value="0"
            onChange={(e) => {
              setCurrentAnswer(e.target.value);
            }}
          />
          <label className="form-check-label" htmlFor="0">
            Unsure
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id="0.2"
            value="0.2"
            onChange={(e) => {
              setCurrentAnswer(e.target.value);
            }}
          />
          <label className="form-check-label" htmlFor="0.2">
            Not at all.
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id="0.4"
            value="0.4"
            onChange={(e) => {
              setCurrentAnswer(e.target.value);
            }}
          />
          <label className="form-check-label" htmlFor="0.4">
            We rarely think alike.
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id="0.6"
            value="0.6"
            onChange={(e) => {
              setCurrentAnswer(e.target.value);
            }}
          />
          <label className="form-check-label" htmlFor="0.6">
            Sometimes we think alike.
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id="0.8"
            value="0.8"
            onChange={(e) => {
              setCurrentAnswer(e.target.value);
            }}
          />
          <label className="form-check-label" htmlFor="0.8">
            We think alike often.
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id="1"
            value="1"
            onChange={(e) => {
              setCurrentAnswer(e.target.value);
            }}
          />
          <label className="form-check-label" htmlFor="1">
            I think just like them.
          </label>
        </div>
      </div>
      <br />
      <button
        className="btn btn-secondary"
        onClick={() => {
          onSubmit([...results, currentAnswer]);
        }}
      >
        Next
      </button>
    </>
  );
};

const Questions = (props) => {
  const { onNext, setFinalResult } = props;
  const [curr, setCurr] = useState(0);

  const [results, setResults] = useState([]);

  const handleSubmit = (results) => {
    setCurr(curr + 1);
    setResults(results);
  };

  console.log(results)

  const questions = CHARACTERS.map((c) => {
    return (
      <div>
        <CurrentQuestion
          imageUrl={c.imageUrl}
          characterInfo={c.characterInfo}
          characterType={c.characterType}
          onSubmit={handleSubmit}
          results={results}
        />
      </div>
    );
  });

  return questions[curr];
};