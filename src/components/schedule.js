import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeCourse } from '../actions'

class Schedule extends Component {

    constructor(props) {
        super()

        this.renderCourse = this.renderCourse.bind(this);
    }

    renderCourse(course) {
        
        return (
            <div key={this.props.courses.indexOf(course)} className={`slot ${course.enrolled ? 'slot__course' : 'slot__empty'}`}>
                <div className="slot_title">{course.enrolled ? course.title : 'Empty Slot'}</div>
                <a className={`action slot_remove ${course.enrolled ? 'show-content' : 'hide-content'}`} onClick ={() => this.props.removeCourse(course)}>remove course</a>
                </div>
        )
    }


render() {
    return (
        <div>
            <div className="schedule_slots">
            {
                this.props.courses.map(this.renderCourse)
            }
            </div>
        </div>
    )
}
}

function mapStateToProps(state) {
    return { courses: state.courses };
}

function mapDispatchToProps(dispatch) {
    return {
        removeCourse:(course)=> {
            dispatch(removeCourse())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Schedule);