import React from 'react';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';

export default function MissionsList() {
  const missions = useSelector((state) => state.missionsReducer);

  // const changeMissionStatusEventListener = (event) => {
  //   event.preventDefault();
  //   dispatch(changeMissionStatus(event.target.parentElement.parentElement.id));
  // };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Discription</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {missions.map((mission) => (
          <tr key={mission.mission_id}>
            <td>{mission.mission_name}</td>
            <td>{mission.description}</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
