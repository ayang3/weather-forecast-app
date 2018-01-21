import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        
        this.state = { term: ''};

        // This has to be done for the this.setState to work, i.e., this is 
        // really the SearchBar, otherwise it does not know what this is in the
        // onInputChange method.
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        //console.log(event.target.value);
        this.setState({ term: event.target.value});
    }

    onFormSubmit(event) {
        // Tells the form that do not submit the form (re-render the form when
        // whenever user presses enter or clicks the Search buton).
        event.preventDefault();
    }

    // Use form because there are functions we get for free, e.g., enter event.
    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input 
                    placeholder="Get a five-day forecast in your favorite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange} />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Search</button>
                </span>
            </form>
        );
    }
}