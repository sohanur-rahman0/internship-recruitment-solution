const patientsFromOtherHospital = [
  {
    firstName: 'Agent',
    lastName: 'Pena',
    diseases: ['COVID'],
  },
  {
    firstName: 'Heisenberg',
    lastName: 'Bear',
    diseases: ['Headache'],
  },
  {
    firstName: 'Okarin',
    lastName: 'May',
    diseases: ['Broken Wrist', 'Mad-scientist'],
  },
  {
    firstName: 'Hououin',
    lastName: 'Kyoma',
    diseases: ['Delusional disorder', 'Memory loss'],
  },
]

let { patients } = require('./patient')

patients = [...patients, ...patientsFromOtherHospital]

const addUniqueID = (prevID) => {
  let currentID = parseInt(prevID) + 1

  patients.forEach((patient) => {
    if (!patient.patientID) {
      let newID = currentID.toString()
      patient.patientID = newID.length == 1 ? '00' + newID : newID.length == 2 ? '0' + newID : newID
      currentID++
    }
  })
  console.log(patients)
}

// addUniqueID('009')
