import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import fetchSongs from '../queries/fetchSongs';

class SongCreate extends Component {
    state = {
        title: ""
    };

    handleChange = (e) => {
        let { name, value } = e.target;
        this.setState({ [name]: value })
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        await this.props.mutate({
            variables: { title: this.state.title },
            refetchQueries: [{ query: fetchSongs }] // Refetch Queries because of react apollo warm caching.
        }); // 'mutate' method available to us through graphql wrapper.
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <Link to="/">Back</Link>
                <h3>Create a New Song</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>Song Title:</label>
                    <input 
                        name="title"
                        placeholder="Enter Title"
                        value={this.state.title}
                        onChange={this.handleChange}/>
                </form>
            </div>
        );
    }
};

const mutation = gql`
    mutation addSong($title: String) {
        addSong(title: $title) {
            title
        }
    }
`;

export default graphql(mutation)(SongCreate);