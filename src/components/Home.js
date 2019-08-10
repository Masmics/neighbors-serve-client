import React from 'react';
import { Link } from 'react-router-dom';
import AllTasks from '../containers/tasks/AllTasks';

const button = {
  borderRadius: '28px', color: '3114cc', 
  backgroundColor: '#E4FFBF', margin: '3px', marginTop: '20px',
  boxShadow: '4px 4px 4px 4px'
};

export default function Home() {
  return (
  <>
    <main>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: '4%' }}>

        <div>
          <Link to="/create" >
            <button type="button" style={button}><b>Create a New Listing</b></button>
          </Link>
        </div>

        <div>
          <button type="button" style={button}><b>TBA: Filter by Type</b></button>
        </div>

        <div>
          <button type="button" style={button}><b>TBA: Filter by Location</b></button>
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
