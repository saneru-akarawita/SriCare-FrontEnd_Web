import React from "react";
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
                        />
                    </ThemeProvider>

                    <ThemeProvider theme={theme}>
                        <TextField id="outlined-basic" label="Password" variant="outlined" 
                            sx={{ 
                                width: '80%',
                                marginX: 'auto',
                                marginY: '2%',
                            }}
                        />
                    </ThemeProvider>

                    <Button variant="contained"
                
                        sx={{ 
                            width: '80%',
                            marginX: 'auto',
                            marginTop: '5%',
                            backgroundColor: '#64CCC5'
                        }}
                            
                    >Login</Button>
                </FormControl>

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