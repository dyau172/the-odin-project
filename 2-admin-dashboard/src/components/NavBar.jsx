import React from './navBar.scss'
import MediaQuery from 'react-responsive';
import Icon from '@mdi/react'
import { mdiAccountGroup, mdiCardAccountDetails, mdiClockTimeThree, mdiCog, mdiHelpBox, mdiHome, mdiMessageReply, mdiNoteMultiple, mdiShieldCheck, mdiViewDashboard } from '@mdi/js';


export default function NavBar() {
  return (
    <div className="navBar">
      <div className="title">
        <Icon className='icon'
        path={mdiViewDashboard}
        size={2}/>
        <h2>Dashboard</h2>
      </div>


      <ul>
        <div className="navRow"> <li><Icon
          className='icon'
          path={mdiHome}
          size={0.8}
        /><a href="/">Home</a></li></div>

        <div className="navRow"> <li><Icon
          className='icon'
          path={mdiCardAccountDetails}
          size={0.8}
        /><a href="/">Profile</a></li></div>

        <div className="navRow"> <li><Icon
          className='icon'
          path={mdiMessageReply}
          size={0.8}
        /><a href="/">Messages</a></li></div>

        <div className="navRow"> <li><Icon
          className='icon'
          path={mdiClockTimeThree}
          size={0.8}
        /><a href="/">History</a></li></div>


        <div className="navRow"> <li><Icon
          className='icon'
          path={mdiNoteMultiple}
          size={0.8}
        /><a href="/">Tasks</a></li></div>


        <div className="navRow"> <li><Icon
          className='icon'
          path={mdiAccountGroup}
          size={0.8}
        /><a href="/">Communities</a></li></div>
      </ul>
      <ul>
        <div className="navRow"> <li><Icon
          className='icon'
          path={mdiCog}
          size={0.8}
        /><a href="/">Settings</a></li></div>
        <div className="navRow"> <li><Icon
          className='icon'
          path={mdiHelpBox}
          size={0.8}
        /><a href="/">Suppport</a></li></div>
        <div className="navRow"> <li><Icon
          className='icon'
          path={mdiShieldCheck}
          size={0.8}
        /><a href="/">Privacy</a></li></div>
      </ul>
    </div>
  )
}

