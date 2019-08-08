import React from 'react';
import {
  BrowserRouter as Router,
  Link 
} from 'react-router-dom';

import styles from '../css/Landing.css';

export default function Landing() {
  return (
  <>
    <main style={styles}>
      <section style={{ padding: '30px' }}>
        <h4><em>Connecting community volunteers with opportunities 
          in the Portland Metro area</em></h4>
        <img src="../../public/image/old-town-portland-oregon-sign-goodfreephotos-com.jpg" 
          alt="aerial view of Portland at sunset" style={{ height: '70%', width: '70%', 
            marginLeft: '15%', marginRight: '15%' }} />
        <div style={{ display: 'inline-block' }}>
          <div>
            <div>
              <p>
                Donate your time on your own schedule to meet needs in 
                your community, or post a request to notify and connect 
                with potential volunteers. Together we can create change, 
                one task at a time!
              </p>
            </div>
          </div>
        </div>
        <div style={{ borderStyle: 'solid', borderWidth: '5px', height: '250px', paddingBottom: '15px' }}>
          <img src="../../public/image/volunteer-balloons-bar-by-rawpixel-on-pixabay.png" 
            alt="a rainbow of metallic balloons spelling out volunteer" 
            style={{ height: '70%', width: '70%', marginLeft: '15%', marginRight: '15%' }} />
          <h5>Please <span><Link to="/home">log in or sign up</Link>
          </span> to view or post volunteer opportunities</h5>
        </div>
      </section>
    </main>
  </>
  );
}
