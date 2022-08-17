import React from './header.scss'
import Icon from '@mdi/react'
import { mdiBellRingOutline, mdiMagnify } from '@mdi/js';
import avatar from '../images/pngaaa.com-1582345.png'

export default function Header() {
  return (
    <div className="header">
      <div className="top">

        <form>
          <Icon className='icon-mag'
            path={mdiMagnify}
            size={1} />

          <input className='searchInput'
          />

        </form>


        <div className="user">
          <Icon className='icon'
            path={mdiBellRingOutline}
            size={1} />
          <img className='sm-avatar' src={avatar} alt="" />
          <p>Morgan Oakley</p>
        </div>
      </div>
      <div className="bottom">
        <img className='avatar' src={avatar} alt="" />
        <div className="details">
          <p>Hi there,</p>
          <h5>Morgan Oakley (@morgan)</h5>
        </div>
        <div className="links">
          <button>New</button>
          <button>Upload</button>
          <button>Share</button>
        </div>
      </div>
    </div>

  )
}
