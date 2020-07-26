import React, { useState } from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import "./SearchBar.css";
import { IUserInput } from "../../Common/Interfaces";

interface ISearchBarProps {
    SetUserInput: (a: IUserInput) => void;
}

function SearchBar(props: ISearchBarProps) {
    const [SearchQuery, setSearchQuery] = useState<string | null>("");
    const handleSearchQueryChange = (s: string | null) => {
        setSearchQuery(s);
    };

    const [HasFocus, setHasFocus] = useState<boolean>(false);

    const handleSubmit = () => {
        if (
            SearchQuery?.length !== 0 &&
            SearchQuery !== null &&
            SearchQuery !== ""
        ) {
            let UserInput: IUserInput = {
                SearchQuery: SearchQuery,
            };
            props.SetUserInput(UserInput);
        } else {
            setHasFocus(true);
        }
    };

    return (
        <div className="SearchBarContainer">
            <Grid container spacing={10}>
                <Grid item xs={12} sm={12}>
                    <TextField
                        required
                        id="outlined-required"
                        label="Search Book Title"
                        variant="outlined"
                        error={HasFocus && SearchQuery === ""}
                        onClick={() => setHasFocus(true)}
                        value={SearchQuery}
                        onChange={(e) => handleSearchQueryChange(e.target.value)}
                    />
                </Grid>
            </Grid>
            <Grid item xs={12} sm={12}>
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Submit
        </Button>
            </Grid>
        </div>
    );
}

export default SearchBar;
