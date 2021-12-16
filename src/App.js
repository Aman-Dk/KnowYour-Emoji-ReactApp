import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😀": "Happy Face",
  "😊": "Smiling Face with Smiling Eyes",
  "🤩": "Star-Struck",
  "😇": "Smiling Face with Halo",
  "🤣": "Rolling on the Floor Laughing",
  "😐": "Neutral Face",
  "😴": "Sleeping Face"
};

const emoji = Object.keys(emojiDictionary);

var appear = "translation will appear here";

export default function App() {
  const [emojiMeaning, setEmojiMeaning] = useState(appear);
  var [currentEmoji, setcurrentEmoji] = useState("");

  function emojiInputHandler(event) {
    var emojiInput = event.target.value;

    var emojiMeaning = emojiDictionary[emojiInput];

    if (emojiMeaning === undefined) {
      emojiMeaning = "we don't have this emoji in our database.";
    }

    setcurrentEmoji(event.target.value);
    setEmojiMeaning(emojiMeaning);
    // setclear(true);
  }

  function emojiClickHandler(emoji) {
    var emojiMeaning = emojiDictionary[emoji];
    setcurrentEmoji(emoji);
    setEmojiMeaning(emojiMeaning);
    document.querySelector("#q").value = "";
  }

  return (
    <div className="App">
      <h1>Know Your Emoji</h1>
      <input id="q" onChange={emojiInputHandler} />

      <h2>{currentEmoji}</h2>
      <h3>{emojiMeaning}</h3>
      <ul>
        {emoji.map((emoji) => {
          return (
            <li key={emoji} onClick={() => emojiClickHandler(emoji)}>
              {emoji}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
