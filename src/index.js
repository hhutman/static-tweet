import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import * as serviceWorker from './serviceWorker';

function Tweet (){
  return (
    <div className="tweet">
    <Avatar/>
    <div className="content">
    <NameWithHandle/><Time/>
    <Message/>
    <div className="buttons">
    <ReplyButton />
    <RetweetButton />
    <LikeButton />
    <MoreOptionsButton />
    </div>
    </div>
    </div>
  );
}

function Avatar (){
  return (
    <img src="https://www.gravatar.com/avatar"
    className="avatar"
    alt="avatar"
    />

  )
}

function Message() {
  return (

    <div className="message">
    This is less than 140 characters.
    </div>

  )
}

function NameWithHandle() {
  return(
    <span className="name-with-handle">
    <span className="name">
    Your name
    </span>
    <span className="handle">
    @yourhandle
    </span>
    </span>
  )
}

const Time = () =>
<span className="time">
  3hr ago
  </span>;




  const ReplyButton = () =>
  <i className='fas fa-reply'></i>

  const RetweetButton = () =>
  <i className='fas fa-retweet'></i>

  const MoreOptionsButton = () =>
  <i className='fas fa-ellipsis-h'></i>

  const LikeButton = () =>
  <i className='fas fa-heart'></i>









ReactDOM.render(<Tweet />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
