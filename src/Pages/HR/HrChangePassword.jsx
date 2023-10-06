import { Stack } from '@mui/material'
import React from 'react'
import HrDashboard from '../../Components/HR/HrDashboard'
import NavbarHr from '../../Components/HR/NavbarHr'
import ChangePassword from '../../Components/HR/ChangePassword'

const HrChangePassword = () => {
  return (
    <Stack direction={"row"}>
      <HrDashboard />
      <Stack width={"100%"}>
        <NavbarHr />
        <ChangePassword />
      </Stack>
    </Stack>
  )
}

export default HrChangePassword