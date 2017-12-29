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
        // ...props needed to make accordion work right
        const { session, addSession, removeSession, ...props } = this.props;
        const { Id: id, Title: title, Rooms: rooms, Abstract: abstract, Speakers: speakers, Tags: tags } = session;
        const startTime = Moment(session.SessionStartTime).format('dddd h:mm a');
        const header = startTime + ' -- ' + title + ' (' + rooms.join(', ') + ')';
        const speakerNames = speakers
            .map(name => {
                return name.FirstName + ' ' + name.LastName;
            })
            .join(', ');
        const headerStyle = this.headerStyle(id);

        return (
            <Panel {...props} collapsible header={header} bsStyle={headerStyle}>
                <p>{this.renderButton(id)}</p>
                <p>{abstract}</p>
                <p>{speakerNames}</p>
                <p>Tags: {tags.join(', ')}</p>
            </Panel>
        );
    }
}

function mapStateToProps({ selected }) {
    return { selected };
}

export default connect(mapStateToProps, { addSession, removeSession })(Session);
