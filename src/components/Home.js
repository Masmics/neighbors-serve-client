import React from 'react';
import { Link } from 'react-router-dom';
// import CreateTask from '../containers/tasks/CreateTask';
import AllTasks from '../containers/tasks/AllTasks';
// import Header from './Header';
// import styles from '../css/styles.css';
import homestyles from '../css/Home.css';

const button = {
  borderRadius: '28px', color: '3114cc', 
  backgroundColor: '#E4FFBF', margin: '3px', marginTop: '15px',
  boxShadow: '4px 4px 4px 4px'
};

export default function Home() {
  return (
  <>
    <main style={homestyles}>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: '4%' }}>
        <div></div>

        <div>
          <Link to="/new" >
            <button type="button" style={button}><b>Create a New Listing</b></button>
          </Link>
        </div>

        <div>
          <button type="button" style={button}><b>Filter by Type</b></button>
        </div>

        <div>
          <button type="button" style={button}><b>Filter by Location</b></button>
        </div>
      </div>

      <div style={{ borderStyle: 'solid', borderWidth: '5px', height: 'auto', paddingBottom: '15px', 
        marginTop: '15px', backgroundColor: '#C7C6B0' }}>
        <h4>Volunteer Opportunities and Alerts</h4>
        <AllTasks />
      </div>
      

    </main>
  </>
  );
}

