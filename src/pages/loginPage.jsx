import {useState} from "react";
import axios from 'axios';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

const theme = createTheme({

    overrides: {
        MuiOutlinedInput: {
          root: {
            '& $notchedOutline': {
              borderColor: 'white', // Change the outline color to white
            },
          },
        },
      },

})

function LoginPage() {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

const loginUser = (e) => {
    e.preventDefault();
    // console.log(formData);

    axios.post('http://localhost:8080/api/v1/auth/authenticate', formData
    ).then((response) => {
        if(response.status === 200){
            console.log(response.data);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.user));
            window.location.href = "/valueAddedServices";
        }
    }).catch((error) => {
        console.log(error);
    });
}

  return (
    <div>
        <Container 
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '98vh', 
            }}
        >
            <Box sx={{ backgroundColor: '#176B87', height: '65vh' , width: '50%'}} 
                borderRadius='12px'>

                <Box
                    sx={{ 
                        height: '15%', 
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '2.5rem',
                        fontWeight: 'bold',
                        color: 'white',
                     }}
                >
                    SriCare
                </Box>

                <Box
                    sx={{ 
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        color: 'white',
                     }}
                >
                    Please Login
                </Box>

                <form action="" onSubmit={loginUser}>
                    <FormControl
                        sx={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '10%',
                            marginBottom: '5%',
                         }}
                    >
                        <ThemeProvider theme={theme}>
                            <TextField id="outlined-basic" label="Email" variant="outlined"
                                sx={{
                                    width: '80%',
                                    marginX: 'auto',
                                    marginY: '2%',
                                }}
                                       name="email"
                                       value={formData.email}
                                       onChange={handleChange}
                            />
                        </ThemeProvider>

                        <ThemeProvider theme={theme}>
                            <TextField id="outlined-basic" label="Password" variant="outlined"
                                sx={{
                                    width: '80%',
                                    marginX: 'auto',
                                    marginY: '2%',
                                }}
                                       name="password"
                                       value={formData.password}
                                       onChange={handleChange}
                            />
                        </ThemeProvider>

                        <Button variant="contained"

                            sx={{
                                width: '80%',
                                marginX: 'auto',
                                marginTop: '5%',
                                backgroundColor: '#64CCC5'
                            }}

                                type="submit"

                        >Login</Button>
                    </FormControl>
                </form>

                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.2rem',
                        color: 'white',
                    }}
                >
                    Do not have an account ? 
                    &nbsp; <a href="/register">Register</a>
                </Box>

            </Box>
        </Container>
    </div>
  );
}

export default LoginPage;