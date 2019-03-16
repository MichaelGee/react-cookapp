import React from "react";
import Layout from "../components/layout";

const Signup = () => (
  <Layout>
    <div>
      <nav className='navbar navbar-light'>
        <span className='navbar-brand mb-0 h1'>
          <h2>Cookit</h2>
        </span>
      </nav>
      <div className='container align-center'>
        <div className='row'>
          <div className='col-3' />
          <div className='col-6'>
            <form id='signup-form'>
              <div className='signup-email'>
                <label for='signup-email'>Email address</label>
                <input type='text' id='signup-email' class='form-control' />
              </div>

              <div className='signup-password'>
                <label for='signup-password'>Password</label>
                <input
                  type='password'
                  id='signup-password'
                  class='form-control'
                />
                <small id='emailHelp' class='form-text text-muted'>
                  *Password should be longer then 6 characters.
                </small>
              </div>

              <div className='confm-password'>
                <label for='signup-password'>Confirm Password</label>
                <input
                  type='password'
                  id='confm-password'
                  class='form-control'
                />
              </div>

              <div className='signup-btn text-center'>
                <input
                  id='submit'
                  type='button'
                  value='Signup'
                  class='btn btn-primary'
                />
              </div>
            </form>
            <div className='col-3' />
          </div>
        </div>
      </div>

      <style jsx>{`
        nav {
          background-color: #009688 !important;
        }
        .card {
          max-width: 20rem;
        }
        #submit {
          width: 12rem;
        }
        #signup-form {
          margin-top: 70px;
        }
        .signup-btn {
          margin-top: 12px;
        }
      `}</style>
    </div>
  </Layout>
);

export default Signup;
