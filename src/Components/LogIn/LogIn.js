import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Box, Button, Grid, Link, Typography } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { blue } from '@material-ui/core/colors'
import CssBaseline from '@material-ui/core/CssBaseline';
import { LockOutlined } from '@material-ui/icons';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles((theme) => ({
    avatar: {
        margin: theme.spacing(2),
        backgroundColor: blue[700]
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}))

const Login = () => {
    const classes = useStyles();
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlined />
                </Avatar>
                <Typography component="h1" variant="h5">Sign in</Typography>
                <form className={classes.form} noValidate>
                    <TextField autoFocus autoComplete="email" margin="normal" variant="outlined" label="Email Address" required fullWidth id="email" />
                    <TextField autoComplete="current-password" margin="normal" type="password" variant="outlined" label="Password" fullWidth required
                        id="outlined-required" />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button type="submit" className={classes.submit} fullWidth
                        variant="contained" color="primary">SIGN IN</Button>
                </form>
                <Grid container>
                    <Grid item xs>
                        <Link href="#" variant="body2" >Forgot Password?</Link>
                    </Grid>
                    <Grid item xs>
                        <Link variant="body2">{"Don't Have any account? Sign Up"}</Link>
                    </Grid>
                </Grid>
            </div>
            <Box mt={8}>
                <Typography color="textSecondary" align="center"> Copyright © Murad Afrad {new Date().getFullYear()} </Typography>
            </Box>
        </Container>
    );
};

export default Login;