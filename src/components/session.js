import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'moment';
import { Panel, Button } from 'react-bootstrap';
import { addSession, removeSession } from '../actions/index';

class Session extends Component {
    isSelected() {
        return this.props.selected.indexOf(this.props.session.Id) !== -1;
    }

    headerStyle(id) {
        return !this.isSelected() ? 'default' : 'success';
    }

    renderButton(id) {
        if (!this.isSelected(id)) {
            return (
                <Button bsStyle="primary" onClick={() => this.props.addSession(id)}>
                    Select
                </Button>
            );
        } else {
            return (
                <Button bsStyle="danger" onClick={() => this.props.removeSession(id)}>
                    Remove
                </Button>
            );
        }
    }

    render() {
        const { session } = this.props;
        const { Id: id, Title: title, Rooms: room, Abstract: abstract, Speakers: speakers, Tags: tags } = session;
        const startTime = Moment(session.SessionStartTime).format('dddd h:mm a');
        const header = startTime + ' -- ' + title + ' -- ' + room;
        const speakerNames = speakers[0].FirstName + ' ' + speakers[0].LastName
        // compile tags, speakers, rooms

        return (
            <Panel collapsible eventKey={id} header={header} bsStyle={this.headerStyle(id)}>
                <p>{this.renderButton(id)}</p>
                <p>{abstract}</p>
                <p>{speakerNames}</p>
                <p>Tags: {tags}</p>
            </Panel>
        );
    }
}

function mapStateToProps({ selected }) {
    return { selected };
}

export default connect(mapStateToProps, { addSession, removeSession })(Session);
