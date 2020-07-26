import React, { useState, useEffect } from 'react';
import MediaCard from '../MediaCardComponent/MediaCard';
import { Grid } from '@material-ui/core';
import './MediaGrid.css';

interface IState {
    selfLink: any;
    volumeInfo: any;
}

interface IMediaGridProps {
    SearchQuery: string | null;
}
function MediaGrid(props: IMediaGridProps) {
    const [ItemArray, setItemArray] = useState<IState[]>
        ([{ selfLink: "", volumeInfo: {} }
        ]);

    useEffect(() => {
        fetch("https://www.googleapis.com/books/v1/volumes?q=" + props.SearchQuery + "&startIndex=0&maxResults=30")
            .then(response => response.json())
            .then(response => {
                console.log(response.totalItems)
                setItemArray(response.items)
            })
            .catch(() => console.log("it didn't work")
            );

    }, [props.SearchQuery]);
    var Cards: JSX.Element[] = [];
    ItemArray.forEach((el: IState, i: Number) => {
        if (!el || !el.volumeInfo.imageLinks) {
            return;
        }

        Cards.push(
            <Grid
                key={"card_" + i}
                item
                sm={6}
                md={4}
                lg={3}
                className="MediaGridCard"
            >
                <MediaCard
                    ImageUrl={el.volumeInfo.imageLinks.thumbnail}
                    title={el.volumeInfo.title}
                    Description={el.volumeInfo.description}
                />
            </Grid>)
    });

    return (
        <div>
            <Grid container spacing={3} className="MediaGridContainer">
                {Cards}
            </Grid>
        </div>
    )
}

export default MediaGrid