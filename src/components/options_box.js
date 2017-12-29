import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import { setKidzMash, setShowSelected } from '../actions/index';

class OptionsBox extends Component {
    updateOptions = value => {
        const showKidz = value.indexOf(1) !== -1;
        const showOnlySelected = value.indexOf(2) !== -1;
        this.props.setKidzMash(showKidz);
        this.props.setShowSelected(showOnlySelected);
    };

    render() {
        return (
            <div className="optionsBox">
                <ButtonToolbar>
                    <ToggleButtonGroup type="checkbox" onChange={this.updateOptions}>
                        <ToggleButton value={1}>Show KidzMash</ToggleButton>
                        <ToggleButton value={2}>Show Only Selected</ToggleButton>
                    </ToggleButtonGroup>
                </ButtonToolbar>
            </div>
        );
    }
}

export default connect(null, {setKidzMash, setShowSelected})(OptionsBox);
