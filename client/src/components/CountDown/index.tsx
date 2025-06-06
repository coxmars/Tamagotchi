// React and external libraries
import React from 'react';

// Assets
import trophy from "../../assets/img/icon-trophy.svg";

// Styles
import "./main.css";

interface CountdownProps {
  // targetDate: string; // Format: "YYYY-MM-DDTHH:mm:ss"
}

const Countdown: React.FC<CountdownProps> = () => {
  // const [timeLeft, setTimeLeft] = useState({
  //   days: 0,
  //   hours: 0,
  //   minutes: 0,
  // });
  // const [showInfo, setShowInfo] = useState(false);
  // const [showStatus, setShowStatus] = useState(true);

  // useEffect(() => {
  //   const target = new Date(targetDate).getTime();

  //   const interval = setInterval(() => {
  //     const now = new Date().getTime();
  //     const difference = target - now;

  //     if (difference <= 0) {
  //       clearInterval(interval);
  //       setTimeLeft({ days: 0, hours: 0, minutes: 0 });
  //     } else {
  //       const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  //       const hours = Math.floor(
  //         (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  //       );
  //       const minutes = Math.floor(
  //         (difference % (1000 * 60 * 60)) / (1000 * 60)
  //       );

  //       setTimeLeft({ days, hours, minutes });
  //     }
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, [targetDate]);

  // useEffect(() => {
  //   ['status', 'leaderboard .title', 'leaderboard-tabs', 'banner-container'].forEach(className => {
  //     const element = document.querySelector(`.${className}`);
  //     element?.classList.toggle('opacity-0', !showStatus);
  //   });
  // }, [showStatus]);

  // const handleClick = () => {
  //   setShowInfo(true);
  //   setShowStatus(false);
    
  //   setTimeout(() => {
  //     setShowInfo(false);
  //     setShowStatus(true);
  //   }, 5000);
  // };

  return (
    <div>
      <div className='countdown loading-aura'>
        <img src={trophy} alt="trophy" />
        <p>The Tournament is coming soon!</p>
        {/* <p>{timeLeft.days}d{timeLeft.hours}h</p> */}
      </div>
      {/* {showInfo && ( 
        <div className='countdown-info'>
          <div className='prize-container'>
            <div className='prize-item'>
              <img src={trophy} alt="First place" className='prize-trophy' />
              <h3 className='prize-title'>1st</h3>
              <p className='prize-subtitle'>Grand Prize - 1,000 USDC</p>
            </div>
            <div className='prize-item'>
              <img src={trophy} alt="Second place" className='prize-trophy' />
              <h3 className='prize-title'>2nd</h3>
              <p className='prize-subtitle'>Runner Up - 500 USDC</p>
            </div>
            <div className='prize-item'>
              <img src={trophy} alt="Third place" className='prize-trophy' />
              <h3 className='prize-title'>3rd</h3>
              <p className='prize-subtitle'>Bronze - 250 USDC</p>
            </div>
            <div className='prize-item'>
              <img src={trophy} alt="Fourth place" className='prize-trophy' />
              <h3 className='prize-title'>4th</h3>
              <p className='prize-subtitle'>Honorable - 100 USDC</p>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Countdown;