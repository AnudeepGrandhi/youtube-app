import React from 'react';

class SearchBar extends React.Component {

    state = { term : '' };

    render() {
        return (
            <div className='search-bar ui segment'>
                <form className='ui form' onSubmit={this.onFormSubmit}>
                    <div className='field'>
                        <label>Video Search</label>
                        <input 
                            value={this.state.term}
                            type="text" 
                            onChange={this.onInputChange}/>
                    </div>
                </form>
            </div>
        );
        
    }

    onInputChange = (event) => {
        this.setState({ term: event.target.value });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.term);

        this.props.onFormSubmit(this.state.term);
    }
}

export default SearchBar;