import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import TableContainer from '../../component/containerComponent/tableContainer'
import { Button, Icon } from "@material-ui/core";
import Millenium_Falcon from '../../Images/Millenium_Falcon.png'
import Death_Star from '../../Images/Death_Star.png';
import Música_de_Star_Wars from '../../Images/MusicdeStarWars.mp3';
import La_Guerra_de_las_Galaxiasv2 from '../../Images/LaGuerradellasGalaxias.mp3';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    alignItems:'left',
    color:'white',
    flexGrow: 1,
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [side, setSide] = useState(true);
  const [easteregg, setEasteregg] = useState(false);
  const open = Boolean(anchorEl);

  const ChooseYourSide = (event) =>{
    setEasteregg(true)
    setSide(!side)
    playAudio(easteregg)
  }


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
 
  const handleClose = () => {
    setAnchorEl(null);
  };
  const playAudio =() => {
    if(global.sound) global.sound.stop();
    let audio = new Audio((side)? La_Guerra_de_las_Galaxiasv2:Música_de_Star_Wars );
    audio.volume = 0.05;
    audio.play();
    setTimeout(()=> audio.pause(), 4000)
  }
  const Logo = () => (
    <Icon>
        <img src={(side) ? Millenium_Falcon : Death_Star} height={40} width={40}/>
    </Icon>
)

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Button variant="h6" className={classes.title} onClick= {ChooseYourSide}>
          The Force LLC (Choose your Side)
          </Button>
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                {(!easteregg) ?<AccountCircle /> : <Logo ></Logo>}
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <TableContainer/>
    </div>
  );
}