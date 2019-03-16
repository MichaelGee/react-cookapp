import React from "react";
import Layout from "../components/layout";
const Login = () => (
  <Layout>
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-4' />
          <div className='col-4'>
            <form id='login-form'>
              <div className='email'>
                <label for='exampleInputEmail1'>Email address</label>
                <input id='login-email' type='text' class='form-control' />
              </div>

              <div className='password'>
                <label for='exampleInputEmail1'>Password</label>
                <input
                  id='login-password'
                  type='password'
                  class='form-control'
                />
              </div>
              <div className='login-btn text-center'>
                <input
                  id='login'
                  type='button'
                  value='Login'
                  class='btn btn-primary'
                  data-dismiss='modal'
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .login {
          width: 12rem;
        }
        .login-btn {
          cursor: pointer;
          margin-top: 12px;
        }
      `}</style>
    </div>
  </Layout>
);

export default Login;
