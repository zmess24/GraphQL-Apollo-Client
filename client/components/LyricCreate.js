import React, { Component } from 'react';
import addLyricToSong from '../queries/addLyricToSong';
import { graphql } from 'react-apollo';

class LyricCreate extends Component {
    state = { 
        content: ""
    };

    handleChange = (e) => {
        let { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        let { content } = this.state;
        let { songId } = this.props;
        await this.props.mutate({ variables: { content, songId } })
        this.setState({ content: "" });
    };

    render() {
        let { handleChange, handleSubmit } = this;
        return (
            <form onSubmit={handleSubmit}>
                <label>Add a Lyric</label>
                <input 
                    name="content"
                    onChange={handleChange}
                    value={this.state.content}
                />         
            </form>
        );
    }
}

export default graphql(addLyricToSong)(LyricCreate);