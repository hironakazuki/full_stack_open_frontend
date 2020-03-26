import React, { useState } from 'react'

const PersonForm = ({persons, setPersons}) => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  
  const addPerson = (event) => {
    event.preventDefault()
    const validateName = persons.some(person => person.name === newName)
    console.log(validateName)
    if (validateName) {
      window.alert(`${newName} is already added to phonebook`)
    } else {
      const newPerson = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  
  return(
    <form onSubmit={addPerson}>
      <div>
        name: <input value={newName} onChange={handleNameChange} placeholder='a new person.' />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange} placeholder='a new number.' />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm