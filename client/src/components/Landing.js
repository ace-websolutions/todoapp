import React from 'react'
import { useHistory } from 'react-router-dom'
import { Container, Typography, makeStyles, ButtonGroup,
    Button, Paper } from '@material-ui/core'
import image from "../assets/bkg.jpg"

const useStyles = makeStyles((theme) => ({
    bkg: {
        background: 'url(' + image + ') top center no-repeat',
        backgroundSize: 'cover',
        flexGrow: '1',
        maxWidth:'100vw',  
    },
    intro: {
        background: 'rgba(255,255,255,0.80)',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        flexDirection: 'column',
        padding: '1.5rem',
        maxWidth: "350px"
    },
    text: {
        margin: '3rem 0'
    },
}))

function Landing() {
    const classes = useStyles();
    const history = useHistory();
    const register = () => {
        history.push("/register");
    }
    const login = () => {
        history.push("/login");
    }

    return (
        <Container className={classes.bkg}>
            <Paper className={classes.intro}>
                <Typography variant='h2'>Welcome</Typography>
                <Typography variant='h6' className={classes.text}>So much to do and with so little time...
                    write things down here in order to stay productive.</Typography>
                <ButtonGroup>
                    <Button variant='contained' color='primary' onClick={register}>Register</Button>
                    <Button variant='contained' color='primary' onClick={login}>Login</Button>
                </ButtonGroup>
            </Paper>
        </Container>
    )
}

export default Landing
