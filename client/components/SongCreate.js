import React, { Component } from 'react';

class SongCreate extends Component {
    state = {
        title: ""
    }

    handleChange = (e) => {
        let { name, value } = e.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div>
                <h3>Create a New Song</h3>
                <form>
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
}

export default SongCreate;