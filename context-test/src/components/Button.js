import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component{
    static contextType = LanguageContext;
    render(){
        
        return(
            <button className='ui button red'>
                <LanguageContext.Consumer>
                    {(val)=> val === 'english' ? 'Submit' : 'Voorleggen'}
                </LanguageContext.Consumer>
            </button>

            
        );
    }
}

export default Button;