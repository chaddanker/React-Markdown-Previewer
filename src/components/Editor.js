import React, { Component } from 'react';
import { connect } from 'react-redux';

import { previewInput } from '../actions';
import template from '../template';

class Editor extends Component {

    state = { input: template };

    componentDidMount() {
        this.props.previewInput(this.state.input);
    }

    onTextChange = (event) => {
        this.setState({
            input: event.target.value
        });

        this.props.previewInput(event.target.value);
    }

    render() {
        const styles = {
            width: '45vw',
            height: '80vh'
        };

        return (
            <div >
                <textarea id="editor" style={styles} onChange={(event) => this.onTextChange(event)} value={this.state.input}/>
            </div>
        );
    }
}

export default connect(null, { previewInput })(Editor);