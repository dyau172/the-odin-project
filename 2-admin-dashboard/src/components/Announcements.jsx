import React from './announcements.scss'
import profile1 from '../images/profile1.png'
import profile2 from '../images/profile2.png'
import profile3 from '../images/profile3.png'
import profile4 from '../images/profile4.jpeg'


export default function Announcements() {
  return (
    <div className="announcements">
      <h2 className='heading'>Annoucements</h2>
      <div className="section">
        <article>
          <h4>Site Maintenance</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, cum.</p>
        </article>
        <hr></hr>
        <article>
          <h4>Community Share Day</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, est!
          </p>
        </article>
        <hr></hr>
        <article>
          <h4>Updated Privacy Policy</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, in!</p>
        </article>
      </div>
      <h2 className='heading'>Trending</h2>
      <div className="section">
        <div className="profile">
          <img className='profile-icon' src={profile1} alt="" />
          <div class="trending-profile-info">
            <div class="trending-username">@tegan</div>
            <div class="trending-project">World Peace Builder</div>
          </div>
        </div>
        <div className="profile">
          <img className='profile-icon' src={profile2} alt="" />
          <div class="trending-profile-info">
            <div class="trending-username">@morgan</div>
            <div class="trending-project">Super Cool Project</div>
          </div>
        </div>
        <div className="profile">
          <img className='profile-icon' src={profile3} alt="" />
          <div class="trending-profile-info">
            <div class="trending-username">@kendall</div>
            <div class="trending-project">Life Changing App</div>
          </div>
        </div>
        <div className="profile">
          <img className='profile-icon' src={profile4} alt="" />
          <div class="trending-profile-info">
            <div class="trending-username">@alex</div>
            <div class="trending-project">No Traffic Maker</div>
          </div>
        </div>
      </div>
    </div>
  )
}
