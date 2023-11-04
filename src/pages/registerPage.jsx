import {useState} from "react";
import Box from '@mui/material/Box';
import axios from 'axios';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import {toast} from "react-toastify";

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

function RegisterPage() {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        mobileNumber: '',
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const registerUser = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8080/api/v1/auth/register', formData)
        .then((response) => {
            if(response.status === 200) {
                if(response.data.errors === null){
                    toast.success('Registration Successful');
                    localStorage.setItem('token', response.data.token);
                    setTimeout(() => {
                        window.location.href = '/login';
                    }, 2000);
                }
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
            <Box sx={{ backgroundColor: '#176B87', height: '85vh' , width: '50%'}}
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
                    Please Register
                </Box>
                <form onSubmit={registerUser}>
                    <FormControl
                        sx={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '5%',
                            marginBottom: '5%',
                         }}
                    >
                        <ThemeProvider theme={theme}>
                            <TextField id="outlined-basic" label="First Name" variant="outlined"
                                sx={{
                                    width: '80%',
                                    marginX: 'auto',
                                    marginY: '2%',
                                }}
                                       name={"firstName"}
                                       onChange={handleChange}
                                       value={formData.firstName}
                            />
                        </ThemeProvider>
                        <ThemeProvider theme={theme}>
                            <TextField id="outlined-basic" label="Last Name" variant="outlined"
                                sx={{
                                    width: '80%',
                                    marginX: 'auto',
                                    marginY: '2%',
                                }}

                                        name={"lastName"}
                                        onChange={handleChange}
                                        value={formData.lastName}
                            />
                        </ThemeProvider>
                        <ThemeProvider theme={theme}>
                            <TextField id="outlined-basic" label="Email" variant="outlined"
                                sx={{
                                    width: '80%',
                                    marginX: 'auto',
                                    marginY: '2%',
                                }}
                                        name={"email"}
                                        onChange={handleChange}
                                        value={formData.email}
                            />
                        </ThemeProvider>

                        <ThemeProvider theme={theme}>
                            <TextField id="outlined-basic" label="Mobile Number" variant="outlined"
                                sx={{
                                    width: '80%',
                                    marginX: 'auto',
                                    marginY: '2%',
                                }}
                                        name={"mobileNumber"}
                                        onChange={handleChange}
                                        value={formData.mobileNumber}
                            />
                        </ThemeProvider>

                        <ThemeProvider theme={theme}>
                            <TextField id="outlined-basic" label="Password" variant="outlined"
                                sx={{
                                    width: '80%',
                                    marginX: 'auto',
                                    marginY: '2%',
                                }}
                                        type={"password"}
                                        name={"password"}
                                        onChange={handleChange}
                                        value={formData.password}
                            />
                        </ThemeProvider>

                        <ThemeProvider theme={theme}>
                            <TextField id="outlined-basic" label="Confirm Password" variant="outlined"
                                sx={{
                                    width: '80%',
                                    marginX: 'auto',
                                    marginY: '2%',
                                }}
                                       type={"password"}
                                       name={"confirmPassword"}
                                       onChange={handleChange}
                                       value={formData.confirmPassword}
                            />
                        </ThemeProvider>

                        <Button variant="contained"

                            sx={{
                                width: '80%',
                                marginX: 'auto',
                                marginTop: '5%',
                                backgroundColor: '#64CCC5'
                            }}
                                type={"submit"}

                        >Register</Button>
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
                    Already have an account ? 
                    &nbsp; <a href="/login">Login</a>
                </Box>

            </Box>
        </Container>
    </div>
  );
}

export default RegisterPage;