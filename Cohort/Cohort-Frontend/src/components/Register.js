import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate();
  const [team, setTeam] = useState({
    teamName: "", students: [], email: "",  studentsCount: "", phoneNumber: "", collegeName: ""
  })
  const [studentNames, setStudents] = useState([])

  const handleNamesChange = (e, index) => {
    const updatedNames = [...studentNames]
    updatedNames[index] = e.target.value 
    setStudents(updatedNames)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(team, studentNames)
    const res = await fetch('http://localhost:5000/cohorts', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(team)
    })
    
    const data = await res.json()

    if(data.status === 400){
      window.alert("Registration not successful")
    }
    else{
      window.alert("Registration successful")
    }

    navigate('/')
    
  }

  useEffect(() => {   // Updating the student names whenever studenNames state is changed.
    setTeam({ ...team, students: studentNames });
  }, [studentNames]);

  useEffect(()=>{
    const count = parseInt(team.studentsCount)
    if(!isNaN(count) && count >= 0 && count<=3){
      setStudents( new Array(count).fill(''))
    }else if(count > 3){
      setStudents( new Array(3).fill(''))
    }
    else{
      setStudents([])
    }
  }, [team.studentsCount])


  return (
    <div className="register-container">
      <form action="http://localhost:5000/cohorts" method='POST' onSubmit={(e) => handleSubmit(e)}>
      <div className='register-title'><p>Fill your team details</p></div>
        <div className='register-div'>
          <div className='textbox'>
            <input type="text" 
              placeholder='Team Name'
              value = {team.teamName}
              onChange={(e) => setTeam({...team, teamName: e.target.value})}
              required
            />
          </div >
          <div className='textbox'>
            <input type="mail" 
              value = {team.email}
              onChange={(e) => setTeam({...team, email: e.target.value})}
              placeholder='Email'
              required
            />
          </div>
          <div className='textbox'>
            <input type="number" 
              placeholder='Phone'
              value = {team.phoneNumber}
              onChange={(e) => setTeam({...team, phoneNumber: e.target.value})}
              required
            />
          </div >
          <div className='textbox'>
            <input type="text" 
              placeholder='College Name'
              value = {team.collegeName}
              onChange={(e) => setTeam({...team, collegeName: e.target.value})}
              required
            />
          </div >
          <div className='textbox'>
            <input type='number' 
              value = {team.studentsCount}
              onChange={(e) => setTeam({...team, studentsCount: e.target.value})}
              placeholder='No.of Students (max 3)'
              min = "0"
              max = "3"
              required
            />
          </div>
          <div className='studentNames'>
            {studentNames.map((name, index) => { 
              const placeHolder = `Team Member ${index+1}`
              return (
              <div className='textbox' key={index}>
                <input type='text' 
                  value = {name}
                  onChange={(e) => handleNamesChange(e, index)}
                  placeholder = {placeHolder}
                  required
                />
              </div>
              )
            })}
          </div>
          <div>
            <button type='submit'>Submit</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Register