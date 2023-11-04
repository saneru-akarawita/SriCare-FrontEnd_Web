import {
    Typography,
    Box,
    Container,
    Grid,
    Card,
    CardContent,
    Button,
  } from '@mui/material';
  import React, {useEffect, useState } from 'react';
  import axios from 'axios';
  const Vas= () => {

    // const cards = [
    //   {
    //     title: 'Ringing tone 1',
    //   },
    //   {
    //     title: 'Ringing tone 2',
    //   },
    //   {
    //     title: 'Ringing tone 3',
    //   },
    //   {
    //     title: 'Ringing tone 4',
    //   },
    //   {
    //     title: 'Ringing tone 5',
    //   },
    //   {
    //     title: 'Ringing tone 6',
    //   },
    // ];

    const [ringtones,setRingtones]=useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/v1/ringing-tones/all')
      .then(function (response) {
        setRingtones(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []); 
  const userId=1;

  const ActivateRingTone = (id) => {
    axios.post(`http://localhost:8080/api/v1/ringing-tones/activate/${userId}/${id}`)
        .then((response) => {
            if(response.status === 200) {
                alert("Successfully Activated");
            }
        }).catch((error) => {
          alert("Failed to activate");
        });
  };
    return (
      <>

        <Box style={bannerStyle}>
        <Container >
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <Typography variant="h6" style={expertiseStyle}>
                 Let callers hear your favourite tune
                </Typography>
                <Typography style={needsStyle}>for just Rs.30/month</Typography>
              </Grid>
              <Grid item>
              <img
                  src="ring.png"
                  style={imageStyle}
                />
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Container style={{ maxWidth: '1800px',backgroundColor:'#646cff' }}>
          <Grid container spacing={7}>
            {ringtones.map((card, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card style={cardStyle}>
                  <CardContent style={cardContentStyle}>
                    <Typography variant="h6" style={titleStyle}>
                      {card.name}
                    </Typography>
                    <Box style={buttonContainerStyle}>
                      <Button
                        variant="contained"
                        color="primary"
                        style={acceptButtonStyle}
                        onClick={() => ActivateRingTone(bill.id)}
                      >
                        Activate Ringing tone
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </>
    );
  };

  const bannerStyle = {
    backgroundColor: '#213547',
    color: '#f3f3f3',
    marginBottom: '50px',
    maxHeight:'1000px'
  };
  const expertiseStyle = {
    fontSize: '40px',
    fontFamily: 'Poppins',
  };
  const needsStyle = {
    fontSize: '40px',
    marginLeft: '80px',
    fontFamily: 'Poppins',
  };
  const cardStyle = {
    border: '1px solid #ccc',
    maxWidth: '500px',
    maxHeight: '240px',
    margin: '20px auto',
  };
  const cardContentStyle = {
    padding: '20px 30px',
  };
  const titleStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    textAlign: 'center',
    marginBottom: '20px',
  };
  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: '20px',
  };
  const acceptButtonStyle = {
    marginRight: '10px',
  };
  const imageStyle = {
      maxWidth: '100px',
      padding: '10px',
    };

  export default Vas;