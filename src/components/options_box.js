import React, { Component } from 'react';
import { ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

class OptionsBox extends Component {
    render() {
        return (
            <div className='optionsBox'>
                <ButtonToolbar>
                    <ToggleButtonGroup type="checkbox" defaultValue={[1]}>
                        <ToggleButton value={1}>Hide KidzMash</ToggleButton>
                        <ToggleButton value={2}>Only Show Selected</ToggleButton>
                    </ToggleButtonGroup>
                </ButtonToolbar>
            </div>
        );
    }
}

export default OptionsBox;
