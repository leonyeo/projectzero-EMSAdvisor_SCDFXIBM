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

const DiagnosisBleeding = () => {
    const classes = useStyles();

    return (
        <div className={styles.wrapper} style={{ overflow: 'auto' }}>

            <div style={{ padding: 15 }}>
                <Card className={classes.root} elevation={4}>
                    <CardHeader style={{ backgroundColor: "#388186", color: "#ffffff" }} title="Our Diagnosis"
                        titleTypographyProps={{ variant: "subtitle1" }} />
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            src={MyImg} component="img"                            
                        />
                        <CardContent>
                            <Typography variant="h5" component="h2">
                            Excess Bleeding
          </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            Blood loss from bleeding tissue through a natural opening in the body, such as the mouth and nose.
          </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>

            <div style={{ padding: 15 }}>
                <Card className={classes.root} elevation={4}>
                    <CardHeader style={{ backgroundColor: "#388186", color: "#ffffff" }} title="Recommended Actions"
                        titleTypographyProps={{ variant: "subtitle1" }} />
                    <CardActions style={{ backgroundColor: "#F9FAFB" }}>
                        {/* <Typography className={classes.questionTitle} >
                            Call for Ambulance
                </Typography> */}
                        <List component="nav" style={{ padding: 30 }}>

                            <ListItem className={classes.warning}>
                                <ListItemText disableTypography primary="Call for AMBULANCE" style={{ fontWeight: 'bold', fontSize: 25 }} />
                            </ListItem>

                            <ListItem style={{ paddingTop: 30, textAlign: 'center' }}>
                                <ListItemText disableTypography primary="First Aid Briefing" style={{ fontWeight: 'bold' }} />
                            </ListItem>

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

                        </List>
                    </CardActions>
                </Card>
            </div>

        </div>
    );
};

export default DiagnosisBleeding;