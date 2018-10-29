import React from 'react';
import { graphql } from 'react-apollo';
import fetchSong from '../queries/fetchSong';
import { Link } from 'react-router-dom';

const SongDetail = ({ data }) => {
    let { song } = data;
    if (!song) return <div></div>
    return (
        <div>
            <Link to="/">Back</Link>
            <h3>{song.title}</h3>
        </div>
    )
};

export default graphql(fetchSong, {
    options: (props) => { return { variables: { id: props.match.params.id } }}
})(SongDetail);
// export default SongDetail;
// Queries are automatically executed, where as mutations must be manually called.