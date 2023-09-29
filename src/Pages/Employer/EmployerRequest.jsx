import { Stack } from '@mui/material'
import React from 'react'
import Dashboard from '../../Components/Employer/Dashboard'
import NewRequest from '../../Components/Employer/NewRequest'

const EmployerRequest = () => {
  return (
    <Stack direction={"row"}>
        <Dashboard />
        <NewRequest />
    </Stack>
  )
}

export default EmployerRequest