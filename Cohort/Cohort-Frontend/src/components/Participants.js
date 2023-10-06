import React, { useState, useEffect } from 'react'
import Team from './Team'
import ReactModal from 'react-modal'

const Participants = () => {
    const [data, setData] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)
    ReactModal.setAppElement('#root')
    const [empty, setEmpty] = useState()

    useEffect(()=>{
        if(isNaN(data)){
            setEmpty(true)
        }
        else{
            setEmpty(false)
        }
    }, [data])

    const emptyClass = empty? "Empty" : "NotEmpty"

    const [input, setInput] = useState({
        _id:"", teamName: "", students: [], email: "",  studentsCount: "", phoneNumber: "", collegeName: ""
    })

    const [studentNames, setStudents] = useState([])

    const handleNamesChange = (e, index) => {
        const updatedNames = [...studentNames]
        updatedNames[index] = e.target.value 
        setStudents(updatedNames)
    }

    useEffect(()=>{
        const count = parseInt(input.studentsCount)
        if(!isNaN(count) && count >= 0 && count<=3){
          setStudents( new Array(count).fill(''))
        }else if(count > 3){
          setStudents( new Array(3).fill(''))
        }
        else{
          setStudents([])
        }
    }, [input.studentsCount])

    useEffect(() => {   // Updating the student names whenever studenNames state is changed.
        setInput({ ...input, students: studentNames });
      }, [studentNames]);

    

    useEffect(() => {
        fetch("http://localhost:5000/cohorts/")
        .then(res => res.json())
        .then(data => {
            setData(data)
            // console.log(data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    const openModal = (id) =>{
        setIsModalOpen(true)
        data.map((team, index) => {
            if(team._id === id){
                setInput({
                    _id: team._id,
                    teamName: team.teamName, 
                    students: team.students, 
                    email: team.email,  
                    studentsCount: team.studentsCount, 
                    phoneNumber: team.phoneNumber, 
                    collegeName: team.collegeName
                })
            }
        })
    }


    const updateTeam = () => {
        setData((data) => data.map((team) => {
            if(team._id === input._id){
                team.teamName = input.teamName
                team.students = input.students
                team.email = input.email
                team.studentsCount = input.studentsCount
                team.phoneNumber = input.phoneNumber
                team.collegeName = input.collegeName
            }
            return team 
        }))

        setIsModalOpen(false)

        fetch(`http://localhost:5000/cohorts/${input._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(input)
        })
        .catch(err=>{
            console.log('Error updating the team', err)
        })
    }

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/cohorts/${id}`, {
            method: 'DELETE',
        })
        .then(res => {
            if(res.status === 204){
                setData((team) => 
                    team.filter(item => item._id !== id))
            }
            else{
                console.log("Error deleting Team")
            }
        })
        .catch(err => {
            console.log('Error deleting Team', err)
        })
    }

  return (
    <div className='participants-main-container'>
        <div className={emptyClass}>No Registrations Yet</div>
    <div className="participants-container">
        <div className='teams-container'>
            {data.map((team, index) => {
                return(
                    <Team key={index}
                        teamName = {team.teamName}
                        teamMembers = {team.students}
                        phone = {team.phoneNumber}
                        email = {team.email}
                        college ={team.collegeName}
                        students = {team.students}
                        deleteMethod = {() => handleDelete(team._id)}
                        editMethod = {() => openModal(team._id)}
                    />
                )
            })}
        </div>
    </div>
    <ReactModal
    className="modal"
    overlayClassName="overlay"
    isOpen = {isModalOpen}
    onRequestClose = {() => setIsModalOpen(false)}
    >
    <h2>Update Team Info</h2>
    <form className='modal-form'>
        <div className='modal-div'>
            <small>Team name</small>
            <input type="text"
                value={input.teamName} 
                onChange={(e) => setInput({...input, teamName:e.target.value})}
                // placeholder='Team name'
                required
            />
        </div>
        <div className='modal-div'><small>Mail</small>
            <input type="mail" 
                value={input.email} 
                onChange={(e) => setInput({...input, email:e.target.value})}
                // placeholder='mail'
                required
            />
        </div>
        <div className='modal-div'><small>Phone number</small>
            <input type="number"
                value={input.phoneNumber} 
                onChange={(e) => setInput({...input, phoneNumber:e.target.value})}
                // placeholder='Phone' 
                required
            />
        </div>
        <div className='modal-div'><small>college name</small>
            <input type="text" 
                value={input.collegeName} 
                onChange={(e) => setInput({...input, collegeName:e.target.value})}
                // placeholder='College Name'
                required
            />
        </div>
        <div className='modal-div'>
            <small>Team Members</small>
            <input type="number" 
                value={input.studentsCount} 
                onChange={(e) => setInput({...input, studentsCount:e.target.value})}
                // placeholder='No.of Students (max 3)'
                required
            />
        </div>
        <div>
            {input.students.map((stu, index) => {
                // const placeHolder = `Team Member ${index+1}`
                return (
                <div className='textbox' key={index}>
                  <input type='text' 
                    value = {stu}
                    onChange={(e) => handleNamesChange(e, index)}
                    // placeholder = {placeHolder}
                    required
                  />
                </div>
                )
            })}
        </div>
        <div className="btn-container">
            <button onClick={updateTeam}>Save</button>
            <button onClick={() => setIsModalOpen(false)}>Cancel</button>
        </div>
    </form>
    
    </ReactModal> 
        
    </div>
  )
}

export default Participants