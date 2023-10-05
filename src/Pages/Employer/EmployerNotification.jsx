import { Stack } from '@mui/material'
import React from 'react'
import Dashboard from '../../Components/Employer/Dashboard'
import Notification from '../../Components/Employer/Notification'
import Navbar from '../../Components/Employer/Navbar'

const EmployerNotification = () => {
  return (
    <Stack direction={"row"}>
        <Dashboard />
        <Stack width={"100%"}> 
        <Navbar />
        <Notification />
        </Stack>
    </Stack>
  )
}

export default EmployerNotification