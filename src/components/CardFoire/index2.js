import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Button from '@material-ui/core/Button';
import './style.css'
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    // marginBottom:20
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 400,
    marginLeft:30,
    flex:1
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function MediaControlCard(props) {
  const classes = useStyles();

  const theme = useTheme();
if(props.data.foire){
  var card= props.data.foire.map(function(foire){
    var image= foire.image;
    console.log("lll",image)
  return <div style={{width:"50%"}}>
  <Card className={classes.root} style={{marginBottom:"30px"}}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h3" variant="h3">
          {foire.name}
          </Typography>
          {/* <Typography variant="h3" color="textSecondary">
           Roody Roodboy
          </Typography> */}
        </CardContent>
        <div className={classes.controls}>
            <span style={{display:"flex"}}>
                <span style={{display:"flex",flexDirection: "column",marginLeft:"40px",marginRight:"30"}}>
                    <span style={{fontSize:"20px",fontWeight:"bold"}}>{foire.jour}</span>
                    <span style={{fontSize:"70px",color:"red"}}>{foire.date}</span>
        <span style={{fontSize:"20px",fontWeight:"bold"}}>{foire.moi} {" "}{foire.annee}</span>
        <span style={{fontSize:"20px",fontWeight:"bold",color:"red"}}>{foire.heure}</span>
                </span>
                <div className="vl"></div>
                {/* adress */}
                <span style={{display:"flex",flexDirection: "column",marginLeft:"40px",marginRight:"40px"}}>
                    <span style={{fontSize:"30px",color:"red"}}>{foire.lieu}</span>
        <span style={{color:"black"}}>{foire.adresse}</span>
        <span style={{fontSize:"20px",color:"green"}}>Admin:</span><span style={{fontSize:"30px",color:"green"}}>{foire.admin}{" "}Gdes</span>
                <span style={{fontSize:"20px",color:"green"}}> a l'avance</span>
          </span>
            </span>
            <Button  variant="contained" color="secondary">
              Reserver vite!
            </Button>

          {/* <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon className={classes.playIcon} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton> */}
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        image={image}
        title="Live from space album cover"
      />
     
    </Card>
    </div>
    })

}
  
  return (
    <div style={{background:"#E5E8E8"}}>
    {card}
    </div>
  );
}
