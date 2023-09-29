import { Stack } from '@mui/material'
import React from 'react'
import Dashboard from '../../Components/Employer/Dashboard'
import AttendanceSystem from '../../Components/Employer/AttendanceSystem'

const EmployerDashboard = () => {
  return (
    <Stack direction={"row"}>
        <Dashboard />
        <AttendanceSystem />
    </Stack>
  )
}

export default EmployerDashboard