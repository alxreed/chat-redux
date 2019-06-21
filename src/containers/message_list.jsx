import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Message from '../components/message';

class MessageList extends Component {
  render() {
    return (
      <div className="channel-container">
        <div className="channel-title">
          <span>Channel #general</span>
        </div>
        <div className="channel-content">
          {this.props.messages.map((message) => {
            return <Message key={message.author} message={message} />
          })}
        </div>
        {/* <MessageForm /> */}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

export default connect(mapStateToProps)(MessageList);
