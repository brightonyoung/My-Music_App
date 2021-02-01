import React, {useState} from 'react';
import { Card, Typography, Select, MenuItem, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  }
});

const SoundQualityHooks = (props) => {
  const classes = useStyles();
  const [level, setLevel] = useState(3);

  const handleChange = e => {
    e.target.value === 1 && props.onLowQuality()
    setLevel(e.target.value);
  }


  return ( 
    <Card raised className={classes.root}>
      <CardContent>
        <Typography variant='h6' gutterBottom>Sound Quality</Typography>
        <Typography variant='subtitle1' gutterBottom>
          Control the quality of your sound
        </Typography>
        <Select onChange={handleChange} value={level}>
          <MenuItem value={1}>Low</MenuItem>
          <MenuItem value={2}>Medium</MenuItem>
          <MenuItem value={3}>High</MenuItem>
        </Select>
      </CardContent>
    </Card>
  );
}

export default SoundQualityHooks;