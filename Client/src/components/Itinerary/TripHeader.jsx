import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import '../../styles/itinerary.scss';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

export default function TripHeader(props) {
  return (
    <Box className="tripHeader" sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
          <Item><h2 className="tripTitle">{ props.tripText }</h2></Item>
          <Item><p className="tripDate">{ props.tripDate }</p></Item>
          <Item><p className="triplocation">{ props.tripLocation }</p></Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item className="edit-icon"><FontAwesomeIcon icon={faPenToSquare} /></Item>
        </Grid>
      </Grid>
    </Box>
  );
}
