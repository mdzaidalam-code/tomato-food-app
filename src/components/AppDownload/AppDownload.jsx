import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/frontend_assets/assets'
const AppDownload = () => {
  return (
    <div>
      <div className="app-download">
        <p>
          For Better Exprience Download<br />
          Tomato App
        </p>
        <div className="app-download-platform">
          <img src={assets.play_store} alt="" /><img src={assets.app_store} alt="" />
        </div>
      </div>
    </div>
  )
}

export default AppDownload