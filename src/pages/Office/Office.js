import React, { useState } from 'react';
import './Office.css';
import { Link } from 'react-router-dom';
import OfficeMap from '../../components/atoms/icons/officeMap';
import Background from '../../components/atoms/icons/background';
import Timelock from '../../components/atoms/Timelock/Timelock';
import Communication from '../../components/atoms/icons/communication';
import Nashville from '../../components/atoms/icons/nashville';
import WorkingOut from '../../components/atoms/icons/workout';
import SystemDynamics from '../../components/atoms/icons/systemdynamics';
import ElectricSkateboard from '../../components/atoms/icons/electricskateboard';
import ChangingHabits from '../../components/atoms/icons/changinghabits';
import Taekwondo from '../../components/atoms/icons/taekwondo';
import InterpretivePrecidence from '../../components/atoms/icons/interpretiveprecidence';
import Windsurfing from '../../components/atoms/icons/windsurfing';
import Rice from '../../components/atoms/icons/rice';

const Office = () => {
  const elements = {
    nashville: {
      id: 'nashville',
      unlockTime: new Date('6 Mar 2021 14:42'),
      position: '550, 700',
      header: 'Nashville',
      image: <Nashville />
    },
    workingout: {
      id: 'workingout',
      unlockTime: new Date('6 Mar 2021 13:32'),
      position: '3800, 800',
      header: 'Working Out At Home',
      image: <WorkingOut />
    },
    systemdynamics: {
      id: 'systemdynamics',
      unlockTime: new Date('7 Mar 2021 12:22'),
      position: '1200, 700',
      header: 'System Dynamics',
      image: <SystemDynamics />
    },
    electricskateboards: {
      id: 'electricskateboards',
      unlockTime: new Date('7 Mar 2021 12:22'),
      position: '1900, 700',
      header: 'Electric Skateboards',
      image: <ElectricSkateboard />
    },
    changinghabits: {
      id: 'changinghabits',
      unlockTime: new Date('6 Mar 2021 12:22'),
      position: '2200, 1800',
      header: 'Changing Habits',
      image: <ChangingHabits />
    },
    communication: {
      id: 'communication',
      unlockTime: new Date('6 Mar 2021 12:22'),
      position: '2900, 1550',
      header: 'Communication',
      image: <Communication />
    },
    taekwondo: {
      id: 'taekwondo',
      unlockTime: new Date('6 Mar 2021 12:22'),
      position: '500, 1300',
      header: 'Taekwondo',
      image: <Taekwondo />
    },
    interpretiveprecidence: {
      id: 'interpretiveprecidence',
      unlockTime: new Date('6 Mar 2021 12:22'),
      position: '1000, 1700',
      header: 'Interpretive Precidence',
      image: <InterpretivePrecidence />
    },
    windsurfing: {
      id: 'windsurfing',
      unlockTime: new Date('6 Mar 2021 12:22'),
      position: '1900, 1400',
      header: 'Windsurfing',
      image: <Windsurfing />
    },
    rice: {
      id: 'rice',
      unlockTime: new Date('6 Mar 2021 12:22'),
      position: '3800, 1700',
      header: 'Rice',
      image: <Rice />
    }
  };

  const [leaveTimeout, setLeaveTimeout] = useState(null);

  const handleMouseEnter = e => {
    clearTimeout(leaveTimeout);
    console.log(e);
    Object.keys(elements).forEach(element => {
      document.getElementById(element).classList.remove('hide');
      console.log(document.getElementById(element));
      document.getElementById(element).classList.remove('show');
    });
    delete elements[e];
    Object.keys(elements).forEach(element => {
      document.getElementById(element).classList.add('hide');
    });
  };

  const handleMouseLeave = e => {
    const leaveTimeout = setTimeout(() => {
      Object.keys(elements).forEach(element => {
        if (element !== e) {
          document.getElementById(element).classList.add('show');
        }
        document.getElementById(element).classList.remove('hide');
      });
    }, 300);
    setLeaveTimeout(leaveTimeout);
    elements[e] = e;
  };

  // const inOneHour = new Date('4 Mar 2021 11:19');
  // console.log(inOneHour);

  return (
    <div id='office-wrapper'>
      <svg
        id='office-map'
        width='4744'
        height='2778'
        viewBox='0 0 4744 2778'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        xlink='http://www.w3.org/1999/xlink'
      >
        <OfficeMap />
        <Background />
        {Object.keys(elements).map(el => {
          const { id, unlockTime, position, image, header } = elements[el];
          return (
            <Timelock
              unlockTime={unlockTime}
              position={position}
              header={header}
            >
              <Link
                id={id}
                to={id}
                onMouseEnter={() => handleMouseEnter(id)}
                onMouseLeave={() => handleMouseLeave(id)}
              >
                {/* rect to allow hover when svg has "holes"*/}
                <rect width='8%' height='8%' fill='rgba(0, 0, 0, 0.0)' />
                {image}
              </Link>
            </Timelock>
          );
        })}
      </svg>
    </div>
  );

  //   return <object data="Office_map.svg" alt="Kiwi standing on oval" />;
};

export default Office;
