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
import MyImg from './cardiac_arrest.jpg';

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

const Diagnosis = () => {
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
                                Cardiac Arrest
          </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Cardiac arrest is a sudden loss of blood flow resulting from the failure of the heart to pump effectively. Signs include loss of consciousness and abnormal or absent breathing. Some individuals may experience chest pain, shortness of breath, or nausea before cardiac arrest.
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
                                <ListItemText disableTypography primary="Give CPR: Push hard and fast" style={{ fontWeight: 'bold' }} />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon />
                                <ListItemText primary="Push down at least two inches at a rate of 100 to 120 pushes a minute in the center of the chest, allowing the chest to come back up to its normal position after each push." />
                            </ListItem>

                            <ListItem>
                                <ListItemIcon>
                                    <StarIcon />
                                </ListItemIcon>
                                <ListItemText disableTypography primary="Use AED" style={{ fontWeight: 'bold' }} />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon />
                                <ListItemText primary="Use the automated external defibrillator as soon as it arrives. Turn it on and follow the prompts." />
                            </ListItem>

                        </List>
                    </CardActions>
                </Card>
            </div>

        </div>
    );
};

export default Diagnosis;