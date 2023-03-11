import React from 'react'

const Course = (props) => {
 if(props.courseDetails.courseAvail==true)
 {
    return(
        <>
        <h1>{props.courseDetails.courseDuration}</h1>
        <h1>{props.courseDetails.courseName}</h1>
        <h1>{props.courseDetails.courseAvail}</h1>
        <button style={{color:'green'}}>Available</button>
        </>
    )
 }
 else{
    return(
        <>
        <h1>{props.courseDetails.courseDuration}</h1>
        <h1>{props.courseDetails.courseName}</h1>
        <h1>{props.courseDetails.courseAvail}</h1>
        <button style={{color:'red'}}>Not Available</button>
        </>
    )
 }
}

export default Course;