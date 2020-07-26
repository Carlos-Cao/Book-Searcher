import React, { useState } from "react";
import "./App.css";
import SearchBar from "./Components/SearchBarComponent/SearchBar";
import MediaGrid from "./Components/MediaGridComponent/MediaGrid";
import { IUserInput } from "./Common/Interfaces";

function App() {
  const [UserInput, setUserInput] = useState<IUserInput>({
    SearchQuery: "cooking",
  });
  function SetUserInput(a: IUserInput) {
    setUserInput(a);
  }
  return (
    <div className="App">
      <SearchBar SetUserInput={SetUserInput} />
      <MediaGrid SearchQuery={UserInput.SearchQuery} />
    </div>
  );
}

export default App;