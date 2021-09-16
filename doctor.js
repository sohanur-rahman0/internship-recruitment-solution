const doctors = [
  {
    doctorID: '6215',
    firstName: 'Jalaluddin',
    lastName: 'Mahbub',
    teamID: '008',
    doctorType: 'Consultant',
    email: 'jabub@hospital.com',
    active: true,
    doctorRequests: [],
  },
  {
    doctorID: '6216',
    firstName: 'Amin',
    lastName: 'Morshed',
    teamID: '008',
    doctorType: 'Assistant Consultant',
    email: 'amhed@hospital.com',
    active: true,
  },
  {
    doctorID: '6214',
    firstName: 'Mahady',
    lastName: 'Selim',
    teamID: '005',
    doctorType: 'Consultant',
    email: 'malim@hospital.com',
    active: true,
    doctorRequests: ['6213'],
  },
  {
    doctorID: '6213',
    firstName: 'Jamela',
    lastName: 'Begum',
    teamID: '005',
    doctorType: 'RMO',
    email: 'jagum@hospital.com',
    active: false,
  },
]

const teams = [
  {
    teamName: 'nephrology',
    teamID: '008',
    consultantInCharge: '6215',
    teamMates: ['6216'],
  },
  {
    teamName: 'cardiology',
    teamID: '005',
    consultantInCharge: '6214',
    teamMates: [],
  },
]

const genEmail = (firstName, lastName) => {
  return firstName.slice(0, 3) + lastName.slice(-3)
}

//1
const addNewDoctor = (firstName, lastName, doctorType = 'RMO', prevDoctorID) => {
  email = genEmail(firstName, lastName)
  const newDoctor = {
    doctorID = prevDoctorID + 1,
    firstName,
    lastName,
    doctorType,
    email,
    active: false,
  }

  doctors.push(newDoctor)
}

//2

const addNewDoctorToTeam008 = (doctorID) =>{
  doctors.forEach((doctor)=>{
    if(doctor.teamID=== '008' && doctorType === 'Consultant'){
      doctor.doctorRequests.push(doctorID)
    }
  })

  consultantApprove(doctorID, '008')
}

const consultantApprove = (doctorID, teamID) =>{
  doctors.forEach((doctor)=>{
    if(doctor.doctorID === doctorID){
      doctor.active = true
    }
  })
  teams.forEach((team)=>{
    if(team.teamID === teamID){
      team.teamMates.push(doctorID);
    }
  })
}

//3

const promoteNewDoctor = (doctorID = '008') =>{
  doctors.forEach((doctor) =>{
    if(doctor.doctorID === doctorID){
      doctor.doctorType = 'Assistant Consultant'
    }
  })
}

//4
const removeAndDisableAminMorshed = () => {
  let doctorIdToRemove
  doctors.forEach((doctor) => {
    const { firstName, lastName, doctorID } = doctor
    if (firstName === 'Amin' && lastName === 'Morshed') {
      doctor.active = false
      doctorIdToRemove = doctorID
    }
  })

  teams.forEach((team) => {
    team.teamMates = team.teamMates.filter((doctorID) => doctorID !== doctorIdToRemove)
  })
}

// removeAndDisableAminMorshed()
