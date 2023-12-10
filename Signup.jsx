import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PhoneIcon from '@mui/icons-material/Phone';
import { InputAdornment } from '@mui/material';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Signup() {

  const [emailError, setEmailError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);
  const [phoneError, setPhoneError] = React.useState(false);
  const [firstNameError, setFirstNameError] = React.useState(false);
  const [lastNameError, setLastNameError] = React.useState(false);
  

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    //-------------------------------------------
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    const nameRegex = /^[a-zA-Z]+$/;
    const phoneRegex = /^\d+$/;

    const email = data.get('email');
    const password = data.get('password');

    if (!emailRegex.test(email)) {
      setEmailError(true);
      console.log('Invalid email address');
      return;
    } else {
      setEmailError(false);
    }

    if (!passwordRegex.test(password)) {
      setPasswordError(true);
      console.log('Invalid password. It must contain at least one digit, one lowercase and one uppercase letter, and be at least 6 characters long.');
      return;
    } else {
      setPasswordError(false);
    }

    const firstName = data.get('firstName');
    if (!nameRegex.test(firstName)) {
      setFirstNameError(true);
      console.log('Invalid first name. It should only contain alphabets.');
      return;
    } else {
      setFirstNameError(false);
    }

    const lastName = data.get('lastName');
    if (!nameRegex.test(lastName)) {
      setLastNameError(true);
      console.log('Invalid last name. It should only contain alphabets.');
      return;
    } else {
      setLastNameError(false);
    }

    const phoneNumber = data.get('phoneNumber');
    if (!phoneRegex.test(phoneNumber)) {
      setPhoneError(true);
      console.log('Invalid phone number. It should only contain numeric characters.');
      return;
    } else {
      setPhoneError(false);
    }

    console.log({
      email,
      password,
      firstName,
      lastName,
      phoneNumber,
      allowExtraEmails: data.get('allowExtraEmails') === 'on',
    });
  };

  const handlePhoneChange = (event) => {
    const phone = event.target.value;
    setPhoneError(false);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  error={firstNameError}
                  helperText={firstNameError ? 'Enter a valid first name containing only alphabets.' : ''}


                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  error={lastNameError}
                  helperText={lastNameError ? 'Enter a valid last name containing only alphabets.' : ''}

                />
              </Grid>
              <Grid item xs={12}>
              <TextField
                error={phoneError}
                helperText={phoneError ? 'Invalid phone number. It should only contain numeric characters.' : ''}

                required
                fullWidth
                id="phoneNumber"
                label="Phone Number"
                name="phoneNumber"
                autoComplete="tel"
                onChange={handlePhoneChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
              <Grid item xs={12}>
              <TextField
                  error={emailError}
                  helperText={emailError ? 'Invalid email address' : ''}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
              <TextField
                  error={passwordError}
                  helperText={passwordError ? 'Invalid password. It must contain at least one digit, one lowercase and one uppercase letter, and be at least 6 characters long.' : ''}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}