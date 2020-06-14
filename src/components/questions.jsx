import React from 'react'
import Card from '@material-ui/core/Card';
import { makeStyles, Typography, CardHeader } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles({
    root: {
        maxWidth: 400,
        borderRadius: 20
    },
});

const GreenCheckbox = withStyles({
    root: {
        color: green[400],
        '&$checked': {
            color: green[600],
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

const QuestionList = ({ question, tag }) => {
    const classes = useStyles;

    const [state, setState] = React.useState({
        checkedG: false,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <Card className={classes.root} elevation={4}>
            <CardHeader style={{ backgroundColor: "#388186", color: "#ffffff" }} title={tag}
                titleTypographyProps={{ variant: "subtitle1" }} />
            <CardActions style={{ backgroundColor: "#F9FAFB" }}>
                <Typography className={classes.questionTitle} style={{ width: '80%', display: 'inline-block' }} >
                    {question}
                </Typography>
                <FormControlLabel style={{ width: '20%', display: 'inline-block' }}
                    control={<GreenCheckbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
                    label="Yes"
                />
            </CardActions>
        </Card>

    );
};

export default QuestionList;