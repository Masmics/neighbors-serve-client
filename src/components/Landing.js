import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/Landing.css';

const ask = { fontSize: '0.75em', padding: '12px', paddingBottom: '20px', textAlign: 'center', 
  borderStyle: 'solid', borderWidth: '15px', borderColor: 'black', backgroundColor: 'white' };

export default function Landing() {
  return (
  <> 
    <main style={styles}>
      <section className="landing">

        <div style={{ borderStyle: 'solid', borderColor: 'black', borderWidth: '3px', backgroundColor: '#C7C6B0', 
          padding: '15px', paddingBottom: '20px'  }}>
          <h5><em>Connecting community volunteers with opportunities 
          in the Portland Metro area</em></h5>
        </div>

        <div>
          <img src="https://cdn.pixabay.com/photo/2015/07/11/23/00/portland-841428_1280.jpg" 
            alt="aerial view of Portland at sunset" style={{ height: '70%', width: '70%', 
              marginLeft: '15%', marginRight: '15%', marginTop: '20px', marginBottom: '22px',
              boxShadow: '8px 8px' }} />
        </div>

        <div style={{ display: 'inline-block' }}>
          <div>
            <div>
              <p style={ask}>
                Donate your time on your own schedule to meet needs in 
                your community, or post a request to notify and connect 
                with potential volunteers. Together we can create change, 
                one task at a time!
              </p>
            </div>
          </div>
        </div>

        <div style={{ borderStyle: 'solid', borderWidth: '5px', height: '250px', paddingBottom: '15px', 
          marginTop: '15px', backgroundColor: '#C7C6B0' }}>
          <img src="https://cdn.pixabay.com/photo/2018/07/17/09/43/activity-3543821__480.png" 
            alt="a rainbow of metallic balloons spelling out volunteer" 
            style={{ height: '80%', width: '70%', marginLeft: '15%', marginRight: '15%' }} />
          <h5>Please <span><Link to="/home">log in or sign up</Link>
          </span> to view or post volunteer opportunities</h5>
        </div>

      </section>

    </main>
  </>
  );
}
