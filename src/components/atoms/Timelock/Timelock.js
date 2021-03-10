import './Timelock.css';
import { useState, useEffect } from 'react';

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

const Timelock = ({ unlockTime, position, header, children }) => {
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    setInterval(() => {
      setNow(Date.now());
    }, 1000);
  }, []);

  const isLocked = now < unlockTime;
  const unlockDay = days[unlockTime.getDay()];
  const unlockHour = String(unlockTime.getHours()).padStart(2, '0');
  const unlockMinutes = String(unlockTime.getMinutes()).padStart(2, '0');

  const lockedText = (
    <text
      className='unlockTimeText'
      x='4%'
      y='4%'
      dominant-baseline='middle'
      text-anchor='middle'
    >
      {`${unlockDay} ${unlockHour}:${unlockMinutes}`}
    </text>
  );

  const unlockedText = (
    <text
      className='unlockTimeText'
      x='4%'
      y='11%'
      dominant-baseline='middle'
      text-anchor='middle'
      fontFamily='Courier'
    >
      {header}
    </text>
  );

  const [xPos, yPos] = position ? position.split([',']) : [0, 0];
  return (
    <svg
      x={xPos}
      y={yPos}
      // viewBox='0 0 3000 3000'
      className={`container ${isLocked ? 'locked' : ''}`}
    >
      {isLocked && lockedText}

      <g opacity={isLocked ? '0.3' : '1'}>
        {children}
        {!isLocked && unlockedText}
      </g>
    </svg>
  );
};

export default Timelock;
