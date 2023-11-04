import React, {useEffect, useState } from 'react';
import { Card, CardContent, Typography, Button, CardActions } from '@mui/material';
import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import styled from 'styled-components';
import axios from 'axios';
import VoiceService from '../components/VoiceServices';
const billsData = [
  {
    id: 1,
    name:"PLAN 400",
    price:600,
    permin:1.5,
    voice:"D2D Voice",
    amount: 100,
    discription:'1000 D2D SMS & 5GB Anytime DATA with data rollover & sharing',
    discription2:'Applicable taxes to be added to the rental',
  },
  {
    id: 2,
    name:"PLAN 500",
    price:600,
    permin:1.5,
    voice:"D2D Voice",
    amount: 120,
    discription:'1000 D2D SMS & 5GB Anytime DATA with data rollover & sharing',
    discription2:'Applicable taxes to be added to the rental',
  },
  {
    id: 3,
    name:"PLAN 600",
    price:600,
    permin:1.5,
    voice:"D2D Voice",
    amount: 90,
    discription:'1000 D2D SMS & 5GB Anytime DATA with data rollover & sharing',
    discription2:'Applicable taxes to be added to the rental',
  },
  {
    id: 4,
    name:"PLAN 700",
    price:600,
    permin:1.5,
    voice:"D2D Voice",
    amount: 110,
    discription:'1000 D2D SMS & 5GB Anytime DATA with data rollover & sharing',
    discription2:'Applicable taxes to be added to the rental',
  },
  {
    id: 5,
    name:"PLAN 800",
    price:600,
    permin:1.5,
    voice:"D2D Voice",
    amount: 130,
    discription:'1000 D2D SMS & 5GB Anytime DATA with data rollover & sharing',
    discription2:'Applicable taxes to be added to the rental',
  }
];

const PCardWrapper = styled(Card)`
  width: 600px;
  margin: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #addfff;
  position: relative;
`;

const PCardHeader = styled.div`
  background-color: #053B50;
  color: white;
  padding: 10px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
`;

const PCardFooter = styled(CardActions)`
  justify-content: flex-end;
`;

const PCardStatus = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: ${(props) => props.statusColor};
  color: white;
  padding: 2px 6px;
  border-bottom-left-radius: 0px;
  border-top-right-radius: 8px;
`;

const PCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;


const VoiceService = () => {
  const [packages,setPackages]=useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/v1/package/all/POSTPAIDVOICE')
      .then(function (response) {
        setPackages(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []); 
  const userId=1;

  const ActivatePackage = (id) => {
    axios.post(`http://localhost:8080/api/v1/package/activate/${userId}/${id}`)
        .then((response) => {
            if(response.status === 200) {
                alert("Successfully Activated");
            }
        }).catch((error) => {
          alert("Failed to activate");
        });
  };
 
  return (


    <PCardContainer>
      {packages.map((bill) => (
        <PCardWrapper key={bill.id}>
                            
                            <Box
                                className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow "
                                sx={{ textAlign: 'center', color: 'text.primary', bg: 'background.paper', border: 1, borderColor: 'grey.100', boxShadow: 1 }}
                                >
                                <PCardHeader>
                                        <Typography variant="h4" component="h3" sx={{fontWeight: 'bold' }}>
                                        {bill.name}
                                        </Typography>
                                </PCardHeader>

                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', my:2 }}>
                                    <Typography variant="h3" component="span" sx={{ mr: 2, fontWeight: 'bold',color: '#64ccc5' }}>
                                    Rs.{bill.price}.00
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                    /month
                                    </Typography>
                                </Box>


                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', mt:2 }}>
                                    <Typography variant="h3" component="span" sx={{ mr: 2, fontWeight: 'extrabold', color: '#053b50'}}>
                                    Unlimited
                                    </Typography>
                                </Box>

                                {/* <Typography variant="body1" color="text.secondary" sx={{mb:2}}>
                                    {bill.voice}
                                </Typography> */}

                                {/* <Typography variant="body1" color="text.primary" sx={{ textAlign: 'left',ml:6}}>
                                    {bill.discription}
                                </Typography>   
                                
                                <Typography variant="body1" color="text.primary" sx={{ textAlign: 'left',ml:6}}>
                                    {bill.discription2}
                                </Typography> */}

                                <Button variant="contained" sx={{ width: 200, height: 48, mx: 'auto',my:5 }}  onClick={() => ActivatePackage(bill.id)}>
                                    Get Package
                                </Button>
                    

                            </Box>  
        </PCardWrapper>
      ))}
    </PCardContainer>
 
 
 
 );
};

export default VoiceService;
