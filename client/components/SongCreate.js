import React, { Component } from 'react';
import gql from 'graphql-tag';

class SongCreate extends Component {
    state = {
        title: ""
    };

    handleChange = (e) => {
        let { name, value } = e.target;
        this.setState({ [name]: value })
    };

    handleSubmit = (e) => {
        e.preventDefault();

    }

    render() {
        return (
            <div>
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
    mutation {
        addSong(title)
    }
`;

export default SongCreate;