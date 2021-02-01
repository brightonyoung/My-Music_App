import React, {Component} from 'react';
import {Card, Typography, Slider, CardContent, CardActionArea} from '@material-ui/core';

class VolumeControl extends Component {
  state = { 
    sliderValue: 50
  }
  onVolumeChange = (_, value) => {
    this.setState({
      sliderValue: value
    })
  }

  componentDidUpdate(_, prevState) {
    if((prevState.sliderValue < 80) && (this.state.sliderValue > 70)){
      this.props.onHighVol()
    }
  }

  volumeChange = e => {
    this.setState({sliderValue: e.target.value})
    console.log(e)
  }

  render() { 
    return ( 
      <div>
        <Card raised>
          <CardActionArea>
            <CardContent>
              <Typography variant='h6' gutterBottom>
                Master Volume
              </Typography>
              <Typography variant='subtitle1' gutterBottom>
                This controls the Value
              </Typography>
              <Slider value={this.state.sliderValue} step={10}  onChange={this.onVolumeChange} marks min={0} max={100}/>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    );
  }
}

export default VolumeControl;