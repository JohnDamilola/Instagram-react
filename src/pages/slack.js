import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
// import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router';

var ChatHeader = React.createClass({
  render: function() {
    return(
      <div className="me">
        <div>
        <div className="col-md-6">
            <Link to="/">
            <h3 className="head">#{this.props.friend}</h3></Link>
            <h5 className="mild">5 companies | Company-wide announcements and work-based matters</h5>
            <hr/>
        </div>
        <div className="col-md-6 mac">
          <span className="btn btn-lg fa fa-phone"></span>
          <span className="btn btn-lg fa fa-cog"></span>
          <span className="btn btn-lg fa fa-book"></span>
          <input className="search" placeholder="Search"/>
          <span className="btn btn-lg">@</span>
          <span className="btn btn-lg fa fa-star-o"></span>
          <span className="btn btn-lg fa fa-ellipsis-v"></span>
        </div>
        </div>
        <div className="clearfix"></div>
      </div>
    );
  }
});

var Welcome = React.createClass({
  render: function() {
    return(
      <div>
        <div>
          <h3><b>#{this.props.friend}</b></h3>
          <h4 className="purpose">ponty97 created this channel on July 17th. This is the very beginning of the #general channel.<br/>
          Purpose: <i>This channel is for team-wide communication and announcements. All team members are in<br/>
          this channel.</i> (edit)</h4>
          <hr/>
        </div>
      </div>
    );
  }
});

var Input = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    console.log(e.target.value);
    var input = ReactDOM.findDOMNode(this.refs.in)
    var timed = Date();
    if (input.value!==""){
      this.props.addTodo(input.value, timed);
      input.value="";
    }
  },
  render: function() {
    return(
      <div>
      <div className="col-xs-12">
        <form onSubmit={this.handleSubmit}>
            <input className="inputs" ref="in" placeholder="Enter message"/>
        </form>
      </div>
      </div>
    );
  }
});

var ChatItem = React.createClass({
  render: function() {
    return(
        <div className="item">
          <div className="col-md-12">
            <img alt="logo" className="pull-left" src="./src/user.jpg" width="40"/>
            <p className="p pull-left"><b>ponty97: <code>{this.props.timer}</code><br/></b> <h5>{this.props.text}</h5><br/></p>
            <button className="red pull-right" onClick={this.handleSubmit}><i className="fa fa-ellipsis-v"></i></button>
          </div>
        </div>
    );
  }
});

var SideBar = React.createClass({
  render: function() {
    return(
      <div className="left col-md-2">
        <h3>Agronite Corp  <span className="fa fa-caret-up lll"></span>
        <span className="fa fa-bell pull-right lll"></span>
        </h3>
        <h4>ponty97</h4><hr/>
        <h3>CHANNELS</h3>
        <ol>
          <Link to="slack/crunch-tech" className="white"><li># crunch-tech</li></Link>
          <Link to="slack/frontend-agronite" className="white"><li># frontend-agronite</li></Link>
          <Link to="slack/general" className="white"><li className="active"># general</li></Link>
          <Link to="slack/random" className="white"><li># random</li></Link>
        </ol>
        <h3>DIRECT MESSAGES</h3>
        <ol>
          <Link to="slack/slackbot" className="white"><li><span className="fa fa-heart"></span> slackbot</li></Link>
          <Link to="slack/johndamilola" className="white"><li><span className="fa fa-circle"></span> johndamilola</li></Link>
          <Link to="slack/dansmog" className="white"><li><span className="fa fa-circle"></span> dansmog</li></Link>
          <Link to="slack/ponty97" className="white"><li><span className="fa fa-circle"></span> ponty97 (you)</li></Link>
          <Link to="slack/shezvar" className="white"><li><span className="fa fa-circle"></span> shezvar</li></Link>
        </ol>
      </div>
    );
  }
});

var Slack = React.createClass({
  getInitialState: function(){
    return {
      total: [],
      chatItem: [],
      time: [],
    }
  },
  componentWillMount: function(){
    this.setState({
      chatItem: this.state.chatItem,
    });
  },
  addTodo: function(item, timed){
    this.setState({
      chatItem: this.state.chatItem.concat(item),
      time: this.state.time.concat(Date().slice(15).slice(0,6)),
    });
  },
  render: function(){
    var chatItem = this.state.chatItem;
    var time = this.state.time;
    var friend = this.props.params.friend;

    var chats = chatItem.map(function(chat,i) {
      return (<ChatItem text={chat} timer={time}/>)
    });
    return(
      <div>
      <SideBar />
      <div className="right col-md-10">
        <ChatHeader friend={friend}/>
        <Welcome friend={friend}/>
        <div>
        <div className="inners">
          {chats}
        </div>
        <Input addTodo={this.addTodo}/>
        </div>
      </div>
      </div>
    )
  }
});

export default Slack;
