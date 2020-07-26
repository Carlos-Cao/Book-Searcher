import React, { useState } from "react";
import "./App.css";
import SearchBar from "./Components/SearchBarComponent/SearchBar";
import MediaGrid from "./Components/MediaGridComponent/MediaGrid";
import { IUserInput } from "./Common/Interfaces";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});
function App() {
  const [UserInput, setUserInput] = useState<IUserInput>({
    SearchQuery: "space",
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