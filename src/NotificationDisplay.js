import React from 'react';
import {Typography, Badge, Grid} from '@material-ui/core';
import Notification from './Notification';
import MailIcon from '@material-ui/icons/Mail';

const NotificationDisplay = (props) => {
  const unreadCount = props.notifications.filter(notification => !notification.readStatus).length
  return ( 
    <div className='notification-display'>
      <div className='notification-header'>
        <Typography color="primary" gutterBottom variant='h3'>
          Notification Center
        </Typography>
        <Badge color="secondary" badgeContent={unreadCount}>
          <MailIcon />
        </Badge>
      </div>
      <Grid container spacing={3} 
            direction="column"
            justify="center"
            alignItems="center">
        {props.notifications.map((notification, index) => (
          <Grid item >
            <Notification 
              key={index}
              notification={notification}
              onReadNotification = {props.onReadNotification} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}


export default NotificationDisplay;