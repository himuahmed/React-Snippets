import React from 'react';
import Youtube  from '../apis/Youtube';


class SearchBar extends React.Component {
    state = {searchInput : ''};
    onFormSubmit =(e)=> {
        e.preventDefault();
        //console.log(this.state.searchInput);
        this.props.onFormSubmit(this.state.searchInput);
    }

    render() {
        return(
            <div className='ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                <div className='field'>
                <label> Search Video</label>
                    <div className="ui icon input">                  
                        <input type='text' value={this.state.value} onChange={(e) => this.setState({searchInput: e.target.value})}  placeholder='Search Here.'/>
                        <i className='search icon'></i>
                    </div>
                </div>
                </form>
            </div>
        );
    }
}
export default SearchBar;