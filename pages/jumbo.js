import React, { Component } from "react";

class Jumbo extends Component {
  render() {
    return (
      <div>
        <div className='jumbotron jumbotron-fluid'>
          <div className='container'>
            <div className='row'>
              <div className='col-6'>
                <h2>Cookit</h2>
              </div>
              <div className='col-6'>
                <P className='signup text-right' data-target='modal1'>
                  <a data-toggle='modal' data-target='#exampleModal'>
                    Sign up
                  </a>
                </P>
              </div>
            </div>

            <h1 className='introtext text-center'>
              Find the recipe for that food!
            </h1>
          </div>
        </div>

        <style jsx>{`
          .jumbotron {
            background-color: #e61c5d !important;
            color: white !important;
          }
        `}</style>
      </div>
    );
  }
}

export default Jumbo;
