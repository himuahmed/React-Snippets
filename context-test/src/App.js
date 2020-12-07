import React from 'react';
import UserCreate from './components/UserCreate';
import LanguageContext from './contexts/LanguageContext';

class App extends React.Component{
  state = {language: 'English'}

  onLanguageChange(language){
    this.setState({language : language})
  }

  render(){
    return(
      <div className="ui container">
        <div>
          Select Language: 
          <i className="us flag" onClick={() => this.onLanguageChange('english') } />
          <i className="dk flag" onClick={() => this.onLanguageChange('detuch') }/>
        </div>
        <LanguageContext.Provider value={this.state.language}>
          <UserCreate />
        </LanguageContext.Provider>
        {this.state.language}      
      </div>
    );
  }
}
export default App;
