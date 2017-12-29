import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PanelGroup, ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import Session from './session';
import OptionsBox from './options_box';
import { fetchSessions, fetchSelected, setKidzMash, setShowSelected } from '../actions/index';

class SessionsList extends Component {
    componentDidMount() {
        this.props.fetchSessions();
        this.props.fetchSelected();
    }

    filteredSessions() {
        return this.props.sessions
            .filter(({ Title }) => this.props.options.showKidzMash || Title.indexOf('KidzMash') === -1)
            .filter(({ Id }) => !this.props.options.showOnlySelected || this.props.selected.indexOf(Id) !== -1);
    }

    updateOptions = value => {
        const showKidz = value.indexOf(1) !== -1;
        const showOnlySelected = value.indexOf(2) !== -1;
        console.log(showOnlySelected);
        this.props.setKidzMash(showKidz);
        this.props.setShowSelected(showOnlySelected);
    };

    render() {
        return (
            <div>
                <div className="optionsBox">
                    <ButtonToolbar>
                        <ToggleButtonGroup type="checkbox" onChange={this.updateOptions}>
                            <ToggleButton value={1}>Show KidzMash</ToggleButton>
                            <ToggleButton value={2}>Show Only Selected</ToggleButton>
                        </ToggleButtonGroup>
                    </ButtonToolbar>
                </div>
                <PanelGroup>
                    {this.filteredSessions().map(session => <Session key={session.Id} session={session} />)}
                </PanelGroup>
            </div>
        );
    }
}

function mapStateToProps({ sessions, selected, options }) {
    return { sessions, selected, options };
}

export default connect(mapStateToProps, { fetchSessions, fetchSelected, setKidzMash, setShowSelected })(SessionsList);
