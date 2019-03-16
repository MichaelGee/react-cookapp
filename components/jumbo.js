import React from "react";
import Layout from "../components/layout";
const Jumbo = () => (
  <Layout>
    <div>
      <div className='jumbotron jumbotron-fluid'>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <h2>Cookit</h2>
            </div>
            <div className='col-6'>
              <p className='signup text-right' data-target='modal1'>
                <a data-toggle='modal' data-target='#exampleModal'>
                  Sign up
                </a>
              </p>
            </div>
          </div>

          <h1 className='introtext text-center'>
            Find the recipe for that food!
          </h1>
        </div>
      </div>

      <style jsx>{`
        body {
          font-family: "Roboto", sans-serif !important;
        }

        .jumbotron {
          background-color: #e61c5d !important;
          color: white !important;
        }

        .introtext {
          margin-top: 70px;
          color: white;
        }
      `}</style>
    </div>
  </Layout>
);

export default Jumbo;
