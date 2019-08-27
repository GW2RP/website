import React from "react";
import {makeStyles} from "@material-ui/core/styles";

import Waterparty from "./backgrounds/waterparty.png";
import {Link, Paper, Typography} from "@material-ui/core";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

const useStyles = makeStyles(theme => ({
  background: {
    backgroundImage: `url(${Waterparty})`,
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    padding: theme.spacing(3, 2),
  }
}));

export default function Auth() {
  const classes = useStyles();

  const [mode, setMode] = React.useState('SIGNUP');

  switch(mode) {
    case 'SIGNIN':
      return (
        <>
          <div className={classes.background}>
            <Paper className={classes.paper}>
              <Typography variant="h5" component="h2">Connexion</Typography>


              <Typography component="p"><Link onClick={() => setMode('SIGNUP')}>Je n'ai pas de compte.</Link></Typography>
            </Paper>
          </div>
        </>
      );
    case 'SIGNUP':
    default:
      return (
        <>
          <div className={classes.background}>
            <Paper className={classes.paper}>
              <Typography variant="h5" component="h2">Créer un compte</Typography>

              <SignUpForm />

              <Typography component="p"><Link onClick={() => setMode('SIGNIN')}>J'ai déjà un compte.</Link></Typography>
            </Paper>
          </div>
        </>
      );
  }
}
