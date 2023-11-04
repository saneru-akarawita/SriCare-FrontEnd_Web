import * as React from 'react';
import axios from 'axios';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Button} from "@mui/material";
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import styled from "styled-components";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

const BootstrapDialog = styled(Dialog)(() => ({
    '& .MuiDialogContent-root': {
        padding: 2,
    },
    '& .MuiDialogActions-root': {
        padding: 1,
    },
}));

function Profile() {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const [formData, setFormData] = React.useState({
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: '',
        email: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const changePassword = (e) => {
        e.preventDefault();

        const email = JSON.parse(localStorage.getItem('user')).email;
        setFormData({ ...formData, email: email });

        axios.post('http://localhost:8080/api/v1/auth/changePassword', formData)
            .then((response) => {
                if(response.status === 200){
                    console.log(response.data);
                    handleClose();
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
                <Box sx={{ backgroundColor: '#176B87', height: '45vh' , width: '50%', paddingX: '1em', paddingY: '3em'}}
                     borderRadius='12px'>
                    <Box sx={{display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
                        <img src="../assets/user.png" style={{width:'8em',height:'8em',borderRadius: '100%'}} alt=""/>
                    </Box>

                    <TableContainer component={Paper} sx={{marginTop: '3em'}}>
                        <Table sx={{ minWidth: 250 }} aria-label="simple table">
                            <TableBody>
                                <TableRow>
                                    <TableCell align="center" >Name</TableCell>
                                    <TableCell align="center" >John Doe</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="center" >Email</TableCell>
                                    <TableCell align="center" >johndoe@gmail.com</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="center" >Mobile Number</TableCell>
                                    <TableCell align="center" >0766023645</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <Box sx={{display: 'flex',justifyContent: 'center',alignItems: 'center',marginTop: '3em'}}>
                        <Button variant="contained" onClick={handleClickOpen}>Change Password</Button>
                    </Box>
                    <React.Fragment>
                        <BootstrapDialog
                            onClose={handleClose}
                            aria-labelledby="customized-dialog-title"
                            open={open}
                        >
                            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                                Change Password
                            </DialogTitle>
                            <IconButton
                                aria-label="close"
                                onClick={handleClose}
                                sx={{
                                    position: 'absolute',
                                    right: 8,
                                    top: 8,
                                    color: (theme) => theme.palette.grey[500],
                                }}
                            >
                                <CloseIcon />
                            </IconButton>
                            <DialogContent dividers sx={{width: '30em'}}>
                                <form action="" onSubmit={changePassword}>
                                    <FormControl
                                        sx={{
                                            width: '100%',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            marginTop: '10%',
                                            marginBottom: '5%',
                                        }}
                                    >
                                        <TextField id="outlined-basic" label="Current Password" variant="outlined"
                                                   sx={{
                                                       width: '80%',
                                                       marginX: 'auto',
                                                       marginY: '2%',
                                                   }}
                                                   name="currentPassword"
                                                   value={formData.currentPassword}
                                                   onChange={handleChange}
                                        />
                                        <TextField id="outlined-basic" label="New Password" variant="outlined"
                                                   sx={{
                                                       width: '80%',
                                                       marginX: 'auto',
                                                       marginY: '2%',
                                                   }}
                                                   name="newPassword"
                                                   value={formData.newPassword}
                                                   onChange={handleChange}
                                        />
                                        <TextField id="outlined-basic" label="Confirm New Password" variant="outlined"
                                                   sx={{
                                                       width: '80%',
                                                       marginX: 'auto',
                                                       marginY: '2%',
                                                   }}
                                                   name="confirmNewPassword"
                                                   value={formData.confirmNewPassword}
                                                   onChange={handleChange}
                                        />


                                    </FormControl>
                                    <DialogActions sx={{display:'flex',justifyContent: 'center'}}>
                                        <Button autoFocus type="submit">
                                            Change
                                        </Button>
                                    </DialogActions>
                                </form>

                            </DialogContent>
                        </BootstrapDialog>
                    </React.Fragment>
                </Box>
            </Container>
        </div>
    )
}

export default Profile;