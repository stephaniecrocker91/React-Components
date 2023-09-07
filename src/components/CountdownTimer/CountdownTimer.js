import styles from '../../styles/CountdownTimer.module.css'
import { useState, useEffect } from 'react';
import {getRemainingTimeUntilMsTimestamp} from './Utils/CountdownTimerUtils';

{/** Requires installing dayjs with command npm install dayjs*/}


const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days:'00',
}

const CountdownTimer = ({countdownTimestampMs}) => {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);
    
useEffect(() => {
    const intervalId = setInterval(() => {
        updateRemainingTime(countdownTimestampMs);
    }, 1000);
    return () => clearInterval(intervalId);
},[countdownTimestampMs]);

    function updateRemainingTime(countDown){
        setRemainingTime(getRemainingTimeUntilMsTimestamp(countDown));
    }

    return(
        <div className={styles.Timer}>
            <div className = {styles.countdown}>
                <span><strong>{remainingTime.days}</strong></span>
                <span>d |</span>
                <span className={styles.twonumbers}><strong>{remainingTime.hours}</strong></span>
                <span>h |</span>
                <span className={styles.twonumbers}><strong>{remainingTime.minutes}</strong></span>
                <span>m |</span>
                <span className={styles.twonumbers}><strong>{remainingTime.seconds}</strong></span>
                <span>s</span>
            </div>
        </div>
    );
}

export default CountdownTimer