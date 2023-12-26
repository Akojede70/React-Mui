import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";
const MuiCard = () => {
  return (
    <Box width="300px">
      <Card>
        <CardMedia
          component="img"
          height="140"
          image="https://source.unsplash.com/random"
          alt="unsplash image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>
          <Typography variant="body2" color="text.secondary">
            React is a Javascript library for building user interfaces. React
            can be used as a base in development of single-page or mobile
            applications
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">share</Button>
          <Button size="small">Learn</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default MuiCard;
