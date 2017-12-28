import React, { Component } from 'react';
import { connect } from 'react-redux';

class SessionsList extends Component {
    renderSession(session) {
        const id = session.Id;
        const title = session.Title;

        return <div key={id}>{title}</div>;
    }

    render() {
        return <div>{this.props.sessions.map(this.renderSession)}</div>;
    }
}

function mapStateToProps({ sessions }) {
    return { sessions };
}

export default connect(mapStateToProps)(SessionsList);
