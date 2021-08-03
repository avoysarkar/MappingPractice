import React from "react";
import Dictionary from "./Dictionary";
import emojipedia from "../emojipedia";

function createData(emoticon) {
  return (
    <Dictionary
      key={emoticon.id}
      emoji={emoticon.emoji}
      name={emoticon.name}
      meaning={emoticon.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createData)}</dl>
    </div>
  );
}

export default App;
