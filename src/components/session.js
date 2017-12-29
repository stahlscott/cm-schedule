import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'moment';
import { Panel, Button } from 'react-bootstrap';
import { addSession, removeSession } from '../actions/index';


class Session extends Component {
    handleClick(id) {
        this.props.addSession(id);
    }

    headerStyle(id) {
        return (this.props.selected.indexOf(id) === -1) ? 'default' : 'success';
    }

    render() {
        const { session } = this.props;
        const id = session.Id;
        const title = session.Title;
        const abstract = session.Abstract;
        const startTime = Moment(session.SessionStartTime).format('dddd h:mm:ss a');
        const headerStyleClass = this.headerStyle(id)

        return (
            <Panel collapsible header={startTime + ' -- ' + title} bsStyle={headerStyleClass} >
                <div><Button bsStyle='primary' onClick={() => this.handleClick(id)}>Select</Button></div>
                <div>{abstract}</div>
            </Panel>
        );
    }
}

function mapStateToProps({ selected }) {
    return { selected };
}

export default connect(mapStateToProps, { addSession, removeSession })(Session);
