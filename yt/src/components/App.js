import React from 'react';
import SearchBar from './SearchBar';
import Youtube  from '../apis/Youtube';
import VideoList from '../components/VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {

    state = {videos : [], selectedVideo : null};

    componentDidMount() {
        this.onSearchSubmit('Attack On Titan la la la la');
    }

    onSearchSubmit = async (searchInput) =>{
       const response =  await Youtube.get('/search',{
            params:{
                q:searchInput,
            }
        });

        this.setState({videos:response.data.items, selectedVideo:response.data.items[0]});
    }

    onVideoSelect = (video) =>{
        this.setState({selectedVideo:video});
    }
    
    render() {
      return (
        <div className='ui container'>
            <SearchBar onFormSubmit = {this.onSearchSubmit}/>
            <div className='ui segment'>
                <div className='ui grid'>
                    <div className='ui row'>
                        <div className='eleven wide column'>
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className='five wide column'>
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
      );
    }
  }

  export default App;