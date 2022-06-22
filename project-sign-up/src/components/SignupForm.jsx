import React from 'react'
import './signupForm.scss'

export default function signupForm() {
  return (
    <div className="signupForm">
      <div className="brief">

        <div className="desc">
        <p>This is not a real online service! You know you need something like this in your life to help you realize your deepest dreams. </p>
        <p>Sign up <i>now</i> to get started.</p>
        <br/>
        <p>You <i>know</i> you want to.</p>
        <br/>
        </div>
      
      </div>

      <div className="details">
        <h3>Let's do this</h3>

        <form>

          <div className="fill">
            <div className="col">
              <div className="input">
                <label>First Name: <input type="text"></input></label>
              </div>
              <br/>
              <div className="input"><label>Email: <input type="email"></input></label></div>
              <br/>
              <div className="input">
                <label>Password: <input type="password"></input></label>
              </div>


            </div>



            <div className="col">

              <div className="input">
                <label>Last Name: <input type="text"></input></label>
              </div>
              <br/>
              <div className="input">
                <label>Phone Number: <input type="tel"></input></label>
              </div>
              <br/>
              <div className="input">
                <label>Confirm Password: <input type="password"></input></label>
              </div>



            </div>
          </div>






        </form>

      </div>

      <div className="submit">
        <button>Create Account</button>
        <div className="haveAcc">
        <p>Already have an account? <a href='/'>Log in</a></p>
        </div>
       

      </div>

    </div>
  )
}
