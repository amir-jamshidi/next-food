import { PowerSettingsNewRounded } from '@mui/icons-material'


const LogoutButton = () => {
  return (
    <div className="flex gap-0.5 pr-2 items-center cursor-pointer">
    <span>
      <PowerSettingsNewRounded className="text-red-500" />
    </span>
    <span className="text-red-500">خروج</span>
  </div>
  )
}

export default LogoutButton