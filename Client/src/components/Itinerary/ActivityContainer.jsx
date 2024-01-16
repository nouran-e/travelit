import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddActivityModal from './AddActivity';
import TripDates from './TripDate';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

export default function ActivityContainer(props) {
  return (
    <section className="activity-container">
      <TripDates tripdates={'Fri, 16 Jan'}/>
      <Box>
        <Grid className="activity-item" container spacing={2} columns={16}>
          <Grid item xs={8}>
            <Item><p className="activity activityName">{ props.activityName }</p></Item>
            <Item className="location"><LocationOnIcon className="pin-icon" /> <p className="activity activityLocation">{ props.activityLocation }</p></Item>
          </Grid>
          <Grid item xs={8}>
            <Item><p className="activity activityTime"><span className="time">{ props.activityStart }</span> to <span className="time">{ props.activityEnd }</span></p></Item>
          </Grid>
        </Grid>
      </Box>
      <AddActivityModal />
    </section>
  );
}
