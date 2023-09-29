import React from 'react'
import HrDashboard from '../../Components/HR/HrDashboard'
import { Stack } from '@mui/material'
import Approved from '../../Components/HR/Approved'

const HrApproved = () => {
  return (
    <Stack direction={"row"}>
      <HrDashboard />
      <Approved />
    </Stack>
  )
}

export default HrApproved