import React, { useState } from 'react';
import { Button, Grid, TextField } from '@material-ui/core';
import './SearchBar.css'
import { IUserInput } from '../../Common/Interfaces'

interface ISearchBarProps {
    SetUserInput: (a: IUserInput) => void;
}

function SearchBar() {
    return <div className="SearchBarContainer">
        <TextField
            required
            id="outlined-required"
            label="Search"
            variant="outlined" />

        <button > Submit </button>
    </div>

}
export default SearchBar
