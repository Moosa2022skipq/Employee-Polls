import * as React from 'react';
import Alert from '@mui/material/Alert';
import Avatar from '@mui/material/Avatar';
import LoadingButton from '@mui/lab/LoadingButton';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {useAppSelector, useAppDispatch} from '../../../app/hooks';
import {loginAsync, authSelector} from "../authSlice";


export default function SignIn() {
    const auth = useAppSelector(authSelector)
    const dispatch = useAppDispatch();

    const Submission = (event: React.FormEvent<HTMLFormElement>) => {
        const data = new FormData(event.currentTarget);
        const username = data.get('username');
        const password = data.get('password');

        if (typeof username !== 'string' || typeof password !== 'string') {
            return;
        }

        event.preventDefault();
        dispatch(loginAsync({username, password}));
    };

    return (
        
            <Container component="main" maxWidth="xs">
                
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={Submission} noValidate sx={{mt: 1}}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            autoComplete="username"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            
                        />
                        {auth.status === 'failed' && (
                            <Alert severity="warning">
                                The authentication was not successful.
                            </Alert>
                        )}
                        <LoadingButton
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                            loading={auth.status === 'loading'}
                        >
                            Sign In
                        </LoadingButton>
                    </Box>
                </Box>
            </Container>
    );
}
