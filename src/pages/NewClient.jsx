import React from 'react'
import ClientForm from '../components/ClientForm';
const NewClient = () => {
  return (
    <>
        <h1 className="font-black text-4xl text-blue-900">Nuevo cliente</h1>
        <p className='mt-3'>Llena los siguientes campos para registrar un paciente</p>
        <ClientForm/>
    </>
  )
}

export default NewClient