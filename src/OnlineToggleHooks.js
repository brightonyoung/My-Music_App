import React, {useState} from 'react';
import {Card, CardContent, Typography, Switch, FormControlLabel} from '@material-ui/core';

const OnlineToggleHooks = props => {
  const [isOnline, setIsOnline] = useState(false)

  const toggleOnline = () => {
    isOnline && props.onOffline();
    setIsOnline(!isOnline)
  }

  return ( 
    <Card raised>
      <CardContent>
        <Typography variant='h6' gutterBottom>
          Online Mode
        </Typography>
        <Typography variant='subtitle1' gutterBottom>
          Is this connected to the internet?
        </Typography>
        <FormControlLabel control={
          <Switch 
            checked={isOnline}
            onChange={toggleOnline} 
            color='primary'
            name='isOnline' />} />
      </CardContent>
    </Card>
  );
}
export default OnlineToggleHooks;