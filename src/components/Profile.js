import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/missions/missions';
import styles from './styles/Profile.module.css';

const Profile = () => {
  const missions = useSelector((state) => state.missionsReducer);
  // console.log(missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(fetchData());
    }
  });

  const missionReserve = missions.filter(
    (mission) => mission.isUserJoinedToMission === true && mission,
  );
  console.log(missionReserve);
  return (
    <>
      <section className={styles.profileSection}>
        <div className={styles.missionsCard}>
          <h2 className={styles.missionsName}>My Missions</h2>
          {missionReserve.map((showMissions) => (
            <div key={showMissions.id}>
              <h4 className={styles.name}>{showMissions.mission_name}</h4>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Profile;
