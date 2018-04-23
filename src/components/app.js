import React, { Component } from 'react';
import CourseLibrary from './courseLibrary';

export default class App extends Component {
  render() {
    return (
      <div classNmae="main-container">
        <div className="library">
          <h1>className="library_header">Course library</h1>
          <CourseLibrary/>
        </div>
      <div className="schedule">
      <h1 className="schedule_header">My Schedule</h1>

      </div>
        </div>
    );
  }
}
