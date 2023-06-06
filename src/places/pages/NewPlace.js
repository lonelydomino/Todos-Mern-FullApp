import React from 'react'
import './NewPlace.css'
import Input from '../../shared/components/FormElements/Input'

const NewPlace = () => {
  return (
    <form className='place-form'>
        <Input element='input' type='text' />
    </form>
  )
}

export default NewPlace