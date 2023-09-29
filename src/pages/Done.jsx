import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, CardActions } from '@mui/material';
import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import styled from 'styled-components';
import TopBar from '../components/TopBar';
import {Done} from '../assets/img'



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
justify-content: center; 
align-items: center;

`;

const VoiceService = () => {
 
  return (

<div>
<TopBar />
    <PCardContainer>
    
        <PCardWrapper  sx={{ mt:25 }}>
                            
                            <Box
                                className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow "
                                sx={{ textAlign: 'center', color: 'text.primary', bg: 'background.paper', border: 1, borderColor: 'grey.100', boxShadow: 1 }}
                                >

                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', my:2 }}>
                                    <Typography variant="h3" component="span" sx={{  fontWeight: 'bold',color: '#64ccc5' }}>
                                    Transaction Completed Successfully
                                    </Typography>
                                    
                                    
                                </Box>
                                <Box >
                                <img sx={{ width: 50, height: 30,justifyContent: 'center',alignItems:'center' }}
                                        
                                        src={Done}
                                       
                                        
                                    />
                                     </Box>
                        

                            </Box>  
        </PCardWrapper>
      
    </PCardContainer>
 
    </div>
 
 );
};

export default VoiceService;
