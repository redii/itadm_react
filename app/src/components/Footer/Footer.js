import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div id="Footer" className="text-muted">
      Code on <a href="https://github.com/redii/itadm">Github</a>
      <span>•</span>
      Henry Akmann {(new Date()).getFullYear()}
    </div>
  )
}

export default Footer
