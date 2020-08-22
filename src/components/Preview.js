import React, { Component } from 'react';

import { connect } from 'react-redux';

class Preview extends Component {

    render() {
        return (
            <div id="preview" dangerouslySetInnerHTML={{ __html: window.marked(this.props.input) }}> 
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        input: state.input
    };
};

export default connect(mapStateToProps)(Preview);