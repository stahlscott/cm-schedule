import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'moment';
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
        const showPast = this.props.options.get('showPast');
        const now = Moment.now()
        // const now = Moment("2018-01-10T01:00:00") // for testing only
        return this.props.sessions
            .filter(({ Title }) => showKidzMash || Title.indexOf('KidzMash') === -1)
            .filter(({ Id }) => !showOnlySelected || this.props.selected.indexOf(Id) !== -1)
            .filter(({ SessionStartTime }) => showPast || Moment(SessionStartTime).isAfter(now));
    }

    renderFilteredSessions() {
        return this.filteredSessions().map(session => <Session key={session.Id} session={session} />);
    }

    render() {
        return (
            <div>
                <OptionsBox />
                <Accordion>{this.renderFilteredSessions()}</Accordion>
            </div>
        );
    }
}

function mapStateToProps({ sessions, selected, options }) {
    return { sessions, selected, options };
}

export default connect(mapStateToProps, { fetchSessions, fetchSelected })(SessionsList);
