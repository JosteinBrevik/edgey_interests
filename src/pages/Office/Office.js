import React, { useState } from 'react';
import './Office.css';
import { Link } from 'react-router-dom';
import Ginger from '../../components/atoms/icons/ginger';
import Horse from '../../components/atoms/icons/horse';
import Fireplace from '../../components/atoms/icons/fireplace';
import OfficeMap from '../../components/atoms/icons/officeMap';
import Background from '../../components/atoms/icons/background';

const Office = () => {
  const elements = {
    horse: 'horse',
    ginger: 'ginger',
    fireplace: 'fireplace'
  };

  const [leaveTimeout, setLeaveTimeout] = useState(null);

  const handleMouseEnter = e => {
    clearTimeout(leaveTimeout);
    Object.keys(elements).forEach(element => {
      document.getElementById(element).classList.remove('hide');
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

        <Link
          id='ginger'
          to='/gingerbread'
          onMouseEnter={() => handleMouseEnter('ginger')}
          onMouseLeave={() => handleMouseLeave('ginger')}
        >
          <Ginger />
        </Link>

        <a
          id='horse'
          href='https://teams.microsoft.com/l/meetup-join/19%3ameeting_YWVmZWYyNjMtZDk5Yi00ODMwLWE5NjQtNDBiZTFhZjlmNDA5%40thread.v2/0?context=%7b%22Tid%22%3a%22d4110288-bf1e-4337-97ab-a5c51371dcea%22%2c%22Oid%22%3a%22fd2dcfa0-44b9-4927-8257-f88bf3a72560%22%7d'
          target='_blank'
          rel='noreferrer'
          onMouseEnter={() => handleMouseEnter('horse')}
          onMouseLeave={() => handleMouseLeave('horse')}
        >
          <Horse />
        </a>

        <Link
          id='fireplace'
          to='/fireplace'
          onMouseEnter={() => handleMouseEnter('fireplace')}
          onMouseLeave={() => handleMouseLeave('fireplace')}
        >
          <Fireplace />
        </Link>
      </svg>
    </div>
  );

  //   return <object data="Office_map.svg" alt="Kiwi standing on oval" />;
};

export default Office;
