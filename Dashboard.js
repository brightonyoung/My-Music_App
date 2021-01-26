import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Switch from '@material-ui/core/Switch';
import Slider from '@material-ui/core/Slider';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import './App.css';

const pStyle = {
  textAlign: "center",
}

const notifications = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "center",
}

function Dashboard(props) {
  return (
    <div className="Home">
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" color="white">
            My Music App
          </Typography>
        </Toolbar>
      </AppBar>
      <h2>Welcome User!</h2>
      <div className="cards-group">
        <Card classname="card" variant="outlined">
            <CardContent>
                <h4>Online Mode</h4>
                <p>Is this application connected to the internet?</p>
                <Switch
                // checked={}
                onChange={props.onlineChange}
                name="onlineMode"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
                online={props.online}/>
            </CardContent>
            <CardActions>
                {/*controls here. switch, button, etc*/}
            </CardActions>
        </Card>
        <Card classname="card" variant="outlined">
            <CardContent>
                <h4>Master Volume</h4>
                <p>Overrides all other sound settings in this application</p>
                <Slider
                    value={props.volume}
                    defaultValue={20}
                    onChange={props.volumeChange}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={10}
                    min={0}
                    max={100}
                />
            </CardContent>
            <CardActions>
                {/*controls here. switch, button, etc*/}
            </CardActions>
        </Card>
        <Card classname="card" variant="outlined">
            <CardContent>
                <h4>Sound Quality</h4>
                <p>Manually control the music quality 
                        in event of poor connection</p>
                <FormControl>
                    <InputLabel id="demo-simple-select-label">Quality</InputLabel>
                    <Select style={{width: 100}}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    onChange={props.qualityChange}
                    value={props.quality}
                    >
                    <MenuItem value='Low'>Low</MenuItem>
                    <MenuItem value='Normal'>Normal</MenuItem>
                    <MenuItem value='High'>High</MenuItem>
                    </Select>
                </FormControl>
            </CardContent>
            <CardActions>
                {/*controls here. switch, button, etc*/}
            </CardActions>
        </Card>
      </div>
        <h3>System Notifications:</h3>
          <div style={notifications}>
          <p style={pStyle}>{props.online === true ? "Your application is online." : "Your application is offline. You won't be able to share or stream music to other devices."}</p>
          <p style={pStyle}>{props.volume < 80 ? `The current volume is set to ${props.volume}.` : `The current volume is set to ${props.volume}. Listening to music at a high volume could cause long-term hearing loss.`}</p>
          <p style={pStyle}>{props.quality === 'Low' ? "Music quality is degraded. Increase quality if your connection allows it." : `The sound is quality is ${JSON.stringify(props.quality)}.`}</p>
        </div>
    </div>
  );
}

export default Dashboard;