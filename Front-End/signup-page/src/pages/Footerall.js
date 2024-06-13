import React from 'react';

function Footerall() {
  return (
    <footer className="footerall" id="footerall" style={{ padding: '5px 0', backgroundColor:'rgb(12,6,39)', width: '100%' }}>
      <div className="container" style={{ backgroundColor:'rgb(12,6,39)' }}>
        <div className="row">
          <div className="col-md-12">
            <p className="text-center" style={ {color: "#ffffff"}}>&copy; {new Date().getFullYear()} Udyog. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footerall;
