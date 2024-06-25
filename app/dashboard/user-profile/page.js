import React from 'react';
import styles from './page.module.scss';
import Input from '@/components/Input';
import Button from '@/components/Button';
import Grid from '@/components/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPlus } from '@fortawesome/free-solid-svg-icons';
const UserProfile = () => {
  // Mock user profile data
  const userProfile = {
    avatar: '/avatar.png', // Replace with actual avatar URL
    fullName: 'Abdullahi Ahmad',
    rank: 'A Seasonal Farmer',
    age: 27,
    contact: {
      country: 'Nigeria',
      address: 'No.6 Kano Road',
      state: 'Borno',
      phone: '080843433',
      city: 'Maiduguri',
      zipcode: '556443',
      email: 'myemail@mail.com',
    },
  };

  return (
    <div className={styles.userProfile}>
      <div className={styles.avatar}>
        <img src={userProfile.avatar} alt="Avatar" />
        <div className={styles.verifiedBadge}>
          <img src="/batch.png" alt="Verified Badge" />
        </div>
        <div className={styles.userInfo}>
          <h3>{userProfile.fullName}</h3>
          <p className={styles.userRank}>{userProfile.rank}</p>
          <p>
            Age: <span>{userProfile.age}</span>
          </p>
        </div>
        <Grid
          columns="repeat(2, 1fr)"
          gap="5px"
          alignItems="center"
          justifyContent="space-between"
          className={styles.socialBtn}
        >
          <Button className={styles.btnMessage}>Message</Button>
          <Button className={styles.btnFollow}>Follow</Button>
        </Grid>
      </div>

      <div className={styles.contact}>
        <h3>CONTACT DETAILS:</h3>
        <div className={styles.grid}>
          <div>
            <label>Country:</label>
            <Input
              type="text"
              value={userProfile.contact.country}
              noMargin
              disabled
            />
          </div>
          <div>
            <label>Address:</label>
            <textarea value={userProfile.contact.address} disabled />
          </div>
          <div>
            <label>State:</label>
            <Input
              type="text"
              value={userProfile.contact.state}
              noMargin
              disabled
            />
          </div>
          <div>
            <label>Phone:</label>
            <Input
              type="text"
              value={userProfile.contact.phone}
              noMargin
              disabled
            />
          </div>
          <div>
            <label>City:</label>
            <Input
              type="text"
              value={userProfile.contact.city}
              noMargin
              disabled
            />
          </div>
          <div>
            <label>Zipcode:</label>
            <Input
              type="text"
              value={userProfile.contact.zipcode}
              noMargin
              disabled
            />
          </div>
          <div>
            <label>Email:</label>
            <Input
              type="email"
              value={userProfile.contact.email}
              noMargin
              disabled
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
