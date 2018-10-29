import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import fetchSongs from '../queries/fetchSongs';
import deleteSong from '../queries/deleteSong';

class SongList extends Component {
    onSongDelete = async id => {
        await this.props.mutate({ variables: { id } });
        this.props.data.refetch(); // Refetch method will execute any queries associated with the component.
    };

    renderSongs() {
        return this.props.data.songs.map(({id, title}) => {
            return (
                <li key={id} className="collection-item">
                    {title}
                    <i className="material-icons" onClick={() => this.onSongDelete(id)}>
                        delete
                    </i>
                </li>
            )
        });
    }

    render() {
        if (this.props.data.loading) return <div>Loading...</div>
        return (
            <div>
                <ul className="collection">
                    {this.renderSongs()}
                </ul>
                <Link to="/songs/new" className="btn-floating btn-large red right">
                    <i className="material-icons">add</i>
                </Link>
            </div>
        );
    }
};

export default graphql(deleteSong)(
    graphql(fetchSongs)(SongList)
); // Need to invoke graphql twice in order to pass down multiple queries.