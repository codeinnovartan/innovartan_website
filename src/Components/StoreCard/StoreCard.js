import React from 'react';
import styles from './StoreCard.module.css';

const StoreCard = ({ schoolName, schoolImage, schoolCode, appLink }) => {
    return (
        <div className={styles.cardStyle}>
            <div>
                <img src={schoolImage} alt={schoolName} />
            </div>
            <div>
                <h5>{schoolName}</h5>
                <a href={appLink} target="_blank" rel="noopener noreferrer">Download App</a>
            </div>
        </div>
    );
};

export default StoreCard;
