import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import DeleteTask from '../../containers/tasks/DeleteTask';
import EditTask from '../../containers/tasks/EditTask';

const homeButton = {
  borderRadius: '28px', color: '3114cc', backgroundColor: '#E4FFBF',
  width: '80px', boxShadow: '4px 4px 4px 4px', margin: '3px', 
  marginTop: '5px', textAlign: 'center'
};

function TaskDetail({ task, owned }) {
  const {
    title,
    taskType,
    date,
    location, 
    streetAddr,
    contactName,
    contactPhone,
    contactEmail,
    description,
    author
  } = task;
  
  const compare = !owned ?
    (
      <>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Link to={'/home'}>
            <button type="button" style={homeButton}><b>Home</b></button>
          </Link>
        </div>
        
        <div>
          <div style={{ textAlign: 'center' }}>
            <h2>Task Detail</h2>
          </div>

          <div>
            <fieldset style={{ marginLeft: '8px', marginRight: '8px', marginBottom: '15px', 
              paddingBottom: '25px', backgroundColor: '#C7C6B0' }}>
              <legend style={{ border: '1px solid', backgroundColor: 'white', padding: '2px' }}><b>  {title}  </b></legend>
              <p><b>Posted by: </b>{contactName}, at {author.email}</p>
              <p><b>Date: </b>{date}</p>
              <p><b>Task Type: </b>{taskType}</p>
              <p><b>Description: </b>{description}</p>
              <p><b>Location/Neighborhood: </b>{location}</p>
              <p><b>Street Address/Intersection: </b>{streetAddr}</p>
              <p><b>Contact Phone: </b>{contactPhone}</p>
              <p><b>Contact Email: </b>{contactEmail}</p>
            </fieldset>
          </div>
        </div>
      </>
    ) :

    (
      <>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Link to={'/home'}>
            <button type="button" style={homeButton}><b>Home</b></button>
          </Link>
        </div>

        <div style={{ textAlign: 'center' }}>
          <h2>Task Detail</h2>
        </div>

        <div>
          <fieldset style={{ marginLeft: '8px', marginRight: '8px', marginBottom: '15px', 
            paddingBottom: '25px', backgroundColor: '#C7C6B0' }}>
            <legend style={{ border: '1px solid', backgroundColor: 'white', padding: '2px' }}><b>  {title}  </b></legend>
            <p><b>Posted by: </b>{contactName}, at {author.email}</p>
            <p><b>Date: </b>{date}</p>
            <p><b>Task Type: </b>{taskType}</p>
            <p><b>Description: </b>{description}</p>
            <p><b>Location/Neighborhood: </b>{location}</p>
            <p><b>Street Address/Intersection: </b>{streetAddr}</p>
            <p><b>Contact Phone: </b>{contactPhone}</p>
            <p><b>Contact Email: </b>{contactEmail}</p>
          </fieldset>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 15px 20px 15px' }}>
          <div>
            <DeleteTask />
          </div>
          <div>
            <Link to={'/home'}>
              <button type="button" style={homeButton}><b>Home</b></button>
            </Link>
          </div>
        </div>
        
        <div>
          <EditTask />
        </div>
    </>
    );
  return compare;
}

TaskDetail.propTypes = {
  owned: PropTypes.bool.isRequired,
  task: PropTypes.shape({
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    taskType: PropTypes.arrayOf(PropTypes.shape({
      Labor: PropTypes.string,
      Trades: PropTypes.string,
      Clerical: PropTypes.string,
      Technical: PropTypes.string,
      Teaching: PropTypes.string,
      Caregiving: PropTypes.string,
      Event: PropTypes.string,
    })).isRequired,
    location: PropTypes.arrayOf(PropTypes.shape({
      Beaverton: PropTypes.string,
      Clackamas: PropTypes.string,
      Gresham: PropTypes.string,
      HappyValley: PropTypes.string,
      LakeOswego: PropTypes.string,
      Milwaukie: PropTypes.string,
      Downtown: PropTypes.string,
      North: PropTypes.string,
      NECloseIn: PropTypes.string,
      NorthEast: PropTypes.string,
      NorthWest: PropTypes.string,
      SECloseIn: PropTypes.string,
      SouthEast: PropTypes.string,
      SouthWest: PropTypes.string,
      Sandy: PropTypes.string,
      Troutdale: PropTypes.string,
      Tualatin: PropTypes.string,
      Vancouver: PropTypes.string,
    })).isRequired,
    streetAddr: PropTypes.string.isRequired,
    contactName: PropTypes.string.isRequired,
    contactPhone: PropTypes.string.isRequired,
    contactEmail: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    author: PropTypes.shape({
      email: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default TaskDetail;
