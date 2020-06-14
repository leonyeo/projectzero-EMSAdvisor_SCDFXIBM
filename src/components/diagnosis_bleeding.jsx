import React from 'react'
import { makeStyles, Typography, CardHeader } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import "../styles.css";
import styles from "../../src/App.module.css";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/Star';
import MyImg from './blood_loss.jpg';

const useStyles = makeStyles({
    root: {
        maxWidth: 450,
    },
    media: {
        height: 140,
    },
    questionTitle: {
        textAlign: 'center'
    },
    warning: {
        padding: 20,
        color: "#FF0000",
        textAlign: 'center',
        backgroundColor: '#FFB6C1',
        fontSize: 20,
        fontWeight: "bolder"
    },
});

class DiagnosisBleeding extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 0
        };
    }

    changeStep(no) {
        let step = this.state.step + no;
        this.setState({
            step: step,
        });
    }

    render() {
        return (
            <div className={styles.wrapper} style={{ overflow: 'auto' }}>

                {this.state.step === 0 ? (
                    <div style={{ padding: 15 }}>
                        <Card className={useStyles.root} elevation={4}>
                            <CardHeader style={{ backgroundColor: "#388186", color: "#ffffff" }} title="Our Diagnosis"
                                titleTypographyProps={{ variant: "subtitle1" }} />
                            <CardActionArea>
                                <CardMedia
                                    className={useStyles.media}
                                    src={MyImg} component="img"                            
                                />
                                <CardContent>
                                    <Typography variant="h5" component="h2">
                                    Excess Bleeding
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                    Blood loss from bleeding tissue through a natural opening in the body, such as the mouth, vagina, nose.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                ) : null}

                {this.state.step > 0 ? (
                    <div style={{ padding: 15 }}>
                        <Card className={useStyles.root} elevation={4}>
                            <CardHeader style={{ backgroundColor: "#388186", color: "#ffffff" }} title="Recommended Actions"
                                titleTypographyProps={{ variant: "subtitle1" }} />
                            <CardActions style={{ backgroundColor: "#F9FAFB" }}>
                                {/* <Typography className={useStyles.questionTitle} >
                                    Call for Ambulance
                                </Typography> */}
                                <List component="nav" style={{ padding: 30 }}>

                                    <ListItem className={useStyles.warning}>
                                        <ListItemText disableTypography primary="Call for AMBULANCE" style={{ fontWeight: 'bold', fontSize: 25 }} />
                                    </ListItem>

                                    <ListItem style={{ paddingTop: 30, textAlign: 'center' }}>
                                        <ListItemText disableTypography primary="First Aid Briefing" style={{ fontWeight: 'bold' }} />
                                    </ListItem>

                                    {this.state.step === 1 ? (
                                        <div>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <StarIcon />
                                                </ListItemIcon>
                                                <ListItemText disableTypography primary="Put pressure on the wound" style={{ fontWeight: 'bold' }} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemIcon />
                                                <ListItemText primary="Press the wound to prevent blood loss. Keep reassuring the person who is bleeding." />
                                            </ListItem>
                                        </div>
                                    ) : null}


                                {this.state.step === 2 ? (
                                    <div>
                                        <ListItem>
                                            <ListItemIcon>
                                                <StarIcon />
                                            </ListItemIcon>
                                            <ListItemText disableTypography primary="Lay the person down" style={{ fontWeight: 'bold' }} />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon />
                                            <ListItemText primary="Lay the person down to reduce their risk of fainting" />
                                        </ListItem>
                                    </div>
                                ) : null}


                                </List>
                            </CardActions>
                        </Card>
                    </div>
                ) : null}

                <Grid container justify='center' style={{display: "flex"}}>
                    {this.state.step > 0 ? (
                        <Button 
                            style={{backgroundColor:"#388186", color:"#ffffff", flex: "1"}} 
                            variant="contained"
                            onClick={() => {this.changeStep(-1)}}
                        >
                            PREV
                        </Button>
                    ) : (<div style={{flex: "1"}} />)}
                    <div style={{flex: "1"}} />
                    {this.state.step < 2 ? (
                        <Button 
                            style={{backgroundColor:"#388186", color:"#ffffff", flex: "1"}} 
                            variant="contained" 
                            onClick={() => {this.changeStep(1)}}
                        >
                            NEXT
                        </Button>
                    ) : (<div style={{flex: "1"}} />)}
                </Grid>


            </div>
        );
    }
};

export default DiagnosisBleeding;