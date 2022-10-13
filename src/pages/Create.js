import React from 'react';
import { Typography, Button, Container, makeStyles } from '@material-ui/core/';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles({});

const Create = () => {
  const classes = useStyles();
  return (
    <Container>
      <Typography variant="h6" color="textSecondary" component="h2" gutterBottom>
        Create a New Note
      </Typography>
      <Button
        type="submit"
        variant="contained"
        color="secondary"
        startIcon={<SendIcon />}
        endIcon={<KeyboardArrowRightIcon />}
      >
        Submit
      </Button>
    </Container>
  );
};

export default Create;
