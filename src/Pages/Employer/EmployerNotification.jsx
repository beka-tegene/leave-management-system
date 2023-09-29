import { Stack } from '@mui/material'
import React from 'react'
import Dashboard from '../../Components/Employer/Dashboard'
import Notification from '../../Components/Employer/Notification'

const EmployerNotification = () => {
  return (
    <Stack direction={"row"}>
        <Dashboard />
        <Notification />
    </Stack>
  )
}

export default EmployerNotification