import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeCourse } from '../actions'

class Schedule extends Component {

    constructor(props) {
        super(props) 

        this.renderCourse = this.renderCourse.bind(this);
    }

    renderCourse(course) {
        return (
            <div key={this.props.courses.indexOf(course)} className={`slot ${course.enrolled ? 'slot__course' : 'slot__empty'}`}>
                <div className="slot__title">{course.enrolled ? course.title : 'Empty Slot'}</div>
            </div>
        )
    }

    render() {
        return (
            <div>
                <div className="schedule__slots">
                    {
                        

                        this.props.courses.map(this.renderCourse)
                    }
                </div>
            </div>
        )

    }

}

function mapStateToProps(state) {
    let enrolledCourses = []
    state.courses.map((course) => {
        if(course.enrolled) {
            enrolledCourses.push(course);
        }
    })
    return { courses: enrolledCourses };
}

function mapDispatchToProps(dispatch) {
    return {
        removeCourse:(course) => {
            dispatch(removeCourse(course))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Schedule);