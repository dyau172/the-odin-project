import React from './dashboard.scss'
import Icon from '@mdi/react'
import { mdiStarPlusOutline, mdiEyePlusOutline, mdiSourceFork } from '@mdi/js';

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="container">
        <h2>Projects</h2>
        <div className="card-column">
          <div className="card">
            <h3>Card title</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet molestias ratione amet alias exercitationem quasi et totam nostrum mollitia aliquam.</p>
            <div className="interactions">
              <Icon className='icon'
                path={mdiStarPlusOutline}
                size={1} />
              <Icon className='icon'
                path={mdiEyePlusOutline}
                size={1} />
              <Icon className='icon'
                path={mdiSourceFork}
                size={1} />
            </div>
          </div>
          <div className="card">
            <h3>Card title</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet molestias ratione amet alias exercitationem quasi et totam nostrum mollitia aliquam.</p>
            <div className="interactions">
              <Icon className='icon'
                path={mdiStarPlusOutline}
                size={1} />
              <Icon className='icon'
                path={mdiEyePlusOutline}
                size={1} />
              <Icon className='icon'
                path={mdiSourceFork}
                size={1} />
            </div>
          </div>
          <div className="card">
            <h3>Card title</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet molestias ratione amet alias exercitationem quasi et totam nostrum mollitia aliquam.</p>
            <div className="interactions">
              <Icon className='icon'
                path={mdiStarPlusOutline}
                size={1} />
              <Icon className='icon'
                path={mdiEyePlusOutline}
                size={1} />
              <Icon className='icon'
                path={mdiSourceFork}
                size={1} />
            </div>
          </div>
        </div>
        <div className="card-column">
          <div className="card">
            <h3>Card title</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet molestias ratione amet alias exercitationem quasi et totam nostrum mollitia aliquam.</p>
            <div className="interactions">
              <Icon className='icon'
                path={mdiStarPlusOutline}
                size={1} />
              <Icon className='icon'
                path={mdiEyePlusOutline}
                size={1} />
              <Icon className='icon'
                path={mdiSourceFork}
                size={1} />
            </div>
          </div>
          <div className="card">
            <h3>Card title</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet molestias ratione amet alias exercitationem quasi et totam nostrum mollitia aliquam.</p>
            <div className="interactions">
              <Icon className='icon'
                path={mdiStarPlusOutline}
                size={1} />
              <Icon className='icon'
                path={mdiEyePlusOutline}
                size={1} />
              <Icon className='icon'
                path={mdiSourceFork}
                size={1} />
            </div>
          </div>
          <div className="card">
            <h3>Card title</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet molestias ratione amet alias exercitationem quasi et totam nostrum mollitia aliquam.</p>
            <div className="interactions">
              <Icon className='icon'
                path={mdiStarPlusOutline}
                size={1} />
              <Icon className='icon'
                path={mdiEyePlusOutline}
                size={1} />
              <Icon className='icon'
                path={mdiSourceFork}
                size={1} />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
