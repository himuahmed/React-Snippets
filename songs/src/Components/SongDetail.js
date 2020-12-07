import React from 'react';
import { connect } from 'react-redux';

const songDetail = (props) => {
    console.log(props);
    return(
            <div>
                <div>
                {props.selectedSong.title}
                </div>
                <div>
                {props.selectedSong.duration}
                </div>
            </div>
         );
}

const matStateToProp = (state) => {
    return {selectedSong : state.selectedSong };
}

export default connect(matStateToProp)(songDetail);
