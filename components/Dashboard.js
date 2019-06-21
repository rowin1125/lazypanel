import React, { useEffect } from 'react';
import '../styles.scss';

const Dashboard = () => {
  let today = new Date();
  let time = today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  let hours = today.getHours();
  let month = today.getMonth();
  let day = today.getUTCDate();
  let year = today.getFullYear();

  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  useEffect(() => {
    return () => {
      document.getElementById('time').innerHTML = time;
      document.getElementById('date').innerHTML = months[month] + ' ' + day + ', ' + year;
    };
  }, []);

  function displayGreeting() {
    if (hours < 11) {
      return 'good morning';
    }
    if (hours > 17) {
      return 'good evening';
    } else {
      return 'good afternoon';
    }
  }
  useEffect(() => {
    return () => {
      document.getElementById('greeting').innerHTML = displayGreeting();
    };
  }, []);

  return (
    <>
      <div id="dashboard-container">
        <div className="leftside-menu">
          <div className="avatar">
            <div className="icon">
              <p>JP</p>
            </div>
            <p>julie park</p>
          </div>
          <nav className="menu">
            <li className="active">home</li>
            <li>music</li>
            <li>reminders</li>
            <li>contacts</li>
            <li>skills</li>
            <li>settings</li>
          </nav>
        </div>
        <div className="main-grid">
          <div className="item one">
            <h1 id="time" className="time" />
            <h1 id="greeting" />
            <p>julie</p>
          </div>
          <div className="item two">
            <div className="music">
              <p>now playing</p>
            </div>
            <div className="info">
              <div className="progress-bar">
                <div className="time--current">1:25</div>
                <div className="time--total">-3:25</div>
                <div className="fill" />
              </div>
              <div className="currently-playing">
                <h2 className="song-name">Paris in the Rain</h2>
                <h3 className="artist-name">Lauv</h3>
              </div>
              <div className="controls">
                <div className="option">
                  <i className="fas fa-bars" />
                </div>
                <div className="volume">
                  <i className="fas fa-volume-up" />
                </div>
                <div className="previous">
                  <i className="fas fa-backward" />
                </div>
                <div className="play">
                  <i className="fas fa-play" />
                </div>
                <div className="next">
                  <i className="fas fa-forward" />
                </div>
                <div className="shuffle">
                  <i className="fas fa-random" />
                </div>
                <div className="add">
                  <i className="fas fa-plus" />
                </div>
              </div>
            </div>
          </div>
          <div className="item three">
            <h2>
              <i className="fas fa-cloud-sun" /> 57°
            </h2>
            <div className="weather">
              <p>cloudy skies</p>
              <p className="city">Seattle, WA</p>
            </div>
          </div>
          <div className="item four">
            <h1 id="date" />
            <p>
              <a>no events today</a>
            </p>
          </div>
          <div className="item five">
            <div className="rooms--top">
              <p>lights</p>
            </div>
            <div className="rooms">
              <div className="rooms--btns">
                <label className="toggle">
                  <input className="toggle-checkbox" type="checkbox" defaultChecked />
                  <div className="toggle-switch" />
                  <span className="toggle-label">Bedroom</span>
                </label>
                <label className="toggle">
                  <input className="toggle-checkbox" type="checkbox" />
                  <div className="toggle-switch" />
                  <span className="toggle-label">Bathroom</span>
                </label>
                <label className="toggle">
                  <input className="toggle-checkbox" type="checkbox" defaultChecked />
                  <div className="toggle-switch" />
                  <span className="toggle-label">Kitchen</span>
                </label>
                <label className="toggle">
                  <input className="toggle-checkbox" type="checkbox" />
                  <div className="toggle-switch" />
                  <span className="toggle-label">Living Room</span>
                </label>
                <label className="toggle">
                  <input className="toggle-checkbox" type="checkbox" />
                  <div className="toggle-switch" />
                  <span className="toggle-label">Study</span>
                </label>
              </div>
            </div>
          </div>
          <div className="item six">
            <div className="reminders">
              <p>reminders</p>
              <div className="reminder--btns">
                <i className="fas fa-ellipsis-h" />
              </div>
            </div>
            <div className="reminders--list">
              <label className="todo">
                <input className="todo-checkbox" type="checkbox" defaultChecked />
                <div className="todo-switch" />
                <span className="todo-label">pay bills</span>
              </label>
              <label className="todo">
                <input className="todo-checkbox" type="checkbox" />
                <div className="todo-switch" />
                <span className="todo-label">go grocery shopping</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
