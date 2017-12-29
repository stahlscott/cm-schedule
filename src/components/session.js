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
        return (!this.isSelected()) ? 'default' : 'success';
    }

    renderButton(id) {
        if (!this.isSelected(id)) {
            return (<Button bsStyle='primary' onClick={() => this.props.addSession(id)}>Select</Button>);
        } else {
            return (<Button bsStyle='danger' onClick={() => this.props.removeSession(id)}>Remove</Button>);
        }
        
    }

    render() {
        const { session } = this.props;
        const id = session.Id;
        const title = session.Title;
        const abstract = session.Abstract;
        const startTime = Moment(session.SessionStartTime).format('dddd h:mm a');

        return (
            <Panel collapsible eventKey={id} header={startTime + ' -- ' + title} bsStyle={this.headerStyle(id)} >
                <div>
                    {this.renderButton(id)}
                </div>
                <div>{abstract}</div>
            </Panel>
        );
    }
}

function mapStateToProps({ selected }) {
    return { selected };
}

export default connect(mapStateToProps, { addSession, removeSession })(Session);
