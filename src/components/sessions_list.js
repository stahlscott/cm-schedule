import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Accordion } from 'react-bootstrap';
import Session from './session';
import OptionsBox from './options_box';
import { fetchSessions, fetchSelected } from '../actions/index';

class SessionsList extends Component {
    componentDidMount() {
        this.props.fetchSessions();
        this.props.fetchSelected();
    }

    filteredSessions() {
        const showKidzMash = this.props.options.get('showKidzMash');
        const showOnlySelected = this.props.options.get('showOnlySelected');
        return this.props.sessions
            .filter(({ Title }) => (showKidzMash || Title.indexOf('KidzMash') === -1))
            .filter(({ Id }) => (!showOnlySelected || this.props.selected.indexOf(Id) !== -1));
    }

    renderFilteredSessions() {
        return this.filteredSessions().map(session => <Session key={session.Id} session={session} />)
    }

    render() {
        return (
            <div>
                <OptionsBox/>
                <Accordion>
                    {this.renderFilteredSessions()}
                </Accordion>
            </div>
        );
    }
}

function mapStateToProps({ sessions, selected, options }) {
    return { sessions, selected, options };
}

export default connect(mapStateToProps, { fetchSessions, fetchSelected })(SessionsList);
