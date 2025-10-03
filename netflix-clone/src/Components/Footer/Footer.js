import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import './footer.css'
function Footer() {
  return (
    <>
    <div className='footer-outer-container '>
      <div className='footer-inner-container'>
        <div className='footer-icon'>
          <FacebookOutlinedIcon  />
          <InstagramIcon  />
          <YouTubeIcon  />
         
        </div>
        <div className='footer-data'>
          <div>
            <ul>
              <li>Audio description</li>
              <li>Inventory relations</li>
              <li>Legal notice</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Helps</li>
              <li>Jobs</li>
              <li>Cookies center</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift cards</li>
              <li>Terms of use</li>
              <li>Corporate Information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media center</li>
              <li>Privacy</li>
              <li>Contact us</li>
            </ul>
          </div>
        </div>
        <div className='service-code'>
          Service Code
        </div>
        <div className='copy-write'>
          &copy;1997-2025 Netflix India
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Footer
