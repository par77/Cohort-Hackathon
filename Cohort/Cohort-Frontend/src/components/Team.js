import React, { useState, useEffect } from 'react'


const Team = (props) => {
  return (
    <div className='team'>
        <ul>
            <li className='team-title'>{props.teamName}</li>
            
                {props.students.map((stu,index)=>{
                    return(
                        <li key={index}> Member {index+1} : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{stu}</li>
                    )
                })}
            <li>Email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {props.email}</li>
            <li>Phone no: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.phone}</li>
            <li>College Name: &nbsp;&nbsp;&nbsp;{props.college}</li>
        </ul>
        <div className="edit-btns">
            <button className='update' onClick={props.editMethod}><i className="fa-regular fa-pen-to-square"></i></button>
            <button className='delete' onClick={props.deleteMethod}><i className="fa-solid fa-trash"></i></button>
        </div>
    </div>
  )
}

export default Team