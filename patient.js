const kidneysInStock = 5

const patients = [
  {
    firstName: 'Shakira',
    lastName: 'Hossain',
    patientID: '007',
    diseases: ['COVID', '1-kidney', '3/4-dissolved-brain'],
    isAdmitted: true,
  },
  {
    firstName: 'Uzumaki',
    lastName: 'Naruto',
    patientID: '008',
    diseases: ['Obesity'],
    isAdmitted: true,
  },
  {
    firstName: 'Sheikh',
    lastName: 'Selim Ahmed',
    patientID: '006',
    diseases: ['Broken heart', 'Depression'],
    isAdmitted: true,
  },
  {
    firstName: 'Rafsan',
    lastName: 'Wayne',
    patientID: '009',
    diseases: ['COVID', '1-kidney', 'Impaired vision'],
    isAdmitted: false,
  },
]

//Show patient in order of their ID
const showPatients = () => {
  patients.sort((a, b) => a.patientID.localeCompare(b.patientID))
  patients.forEach((patient) => {
    const { patientID, lastName, firstName } = patient
    console.log(`ID: ${patientID} Name: ${firstName} ${lastName}`)
  })
}

//Admit patient who are not admitted yet
const admitPatients = () => {
  patients.forEach((patient) => {
    const { patientID, lastName, firstName } = patient
    if (patient.isAdmitted === false) {
      console.log(`ID: ${patientID} Name: ${firstName} ${lastName}`)
      patient.isAdmitted = true
    }
  })
}

// find the patient who require kidney and number of patients we need to finish the kidney stock
const findKidneyPatents = () => {
  let kidneyPatients = 0
  patients.forEach((patient) => {
    const { patientID, firstName, lastName } = patient
    if (patient.diseases.includes('1-kidney')) {
      console.log(`ID: ${patientID} Name: ${firstName} ${lastName}`)
      kidneyPatients++
    }
  })
  console.log(`We need ${kidneysInStock - kidneyPatients} more patient to finish the kidney stock`)
}

// showing covid patients details
const covidPatients = () => {
  patients.forEach((patient) => {
    const { lastName, firstName, diseases } = patient
    if (patient.diseases.includes('COVID')) {
      console.log(`${lastName}, ${firstName}, ${diseases.length} ${diseases.length === 1 ? 'disease' : 'diseases'}`)
    }
  })
}

// showPatients()
// admitPatients()
// findKidneyPatents()
// covidPatients()

module.exports = { patients }
