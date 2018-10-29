import React from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import fetchSong from '../queries/fetchSong';
import LyricCreate from './LyricCreate';
import LyricList from '../components/LyricList';

const SongDetail = ({ data, match }) => {
    let { song } = data;
    if (!song) return <div></div>
    return (
        <div>
            <Link to="/">Back</Link>
            <h3>{song.title}</h3>
            <LyricList lyrics={song.lyrics} />
            <LyricCreate songId={match.params.id}/>
        </div>
    )
};

export default graphql(fetchSong, {
    options: (props) => { return { variables: { id: props.match.params.id } }}
})(SongDetail);
// export default SongDetail;
// Queries are automatically executed, where as mutations must be manually called.