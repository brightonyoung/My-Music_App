import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Form from './Form';
import Dashboard from './Dashboard';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      online: false,
      volume: 20,
      quality: 'Normal',
      loggedIn: false,

    }
  }

  onlineChange = () => {
    this.setState({
      online: !this.state.online
    })
  }

  volumeChange = (event, value) => this.setState({ volume: value });

  qualityChange = (event) => this.setState({ quality: event.target.value });

  handleLogin = (e) => {
    e.preventDefault();
    this.setState({
      loggedIn: !this.state.loggedIn
    })
  }
  
  render() {
    return (
      !this.state.loggedIn ? (
      <div className="App">
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" color="white">
              My Music App
            </Typography>
          </Toolbar>
        </AppBar>
        <Form onClick={this.handleLogin}/>
      </div>
      ) : (
        <Dashboard onlineChange={this.onlineChange} volumeChange={this.volumeChange} qualityChange={this.qualityChange} online={this.state.online} volume={this.state.volume} quality={this.state.quality}/>
      )
    );
  }
}

export default App;