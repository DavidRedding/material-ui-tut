import React, { useState } from 'react';
import {
  Typography,
  Button,
  Container,
  makeStyles,
  TextField,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
} from '@material-ui/core/';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import SendIcon from '@material-ui/icons/Send';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block',
  },
});

const Create = () => {
  const { field } = useStyles();
  let history = useHistory();
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [titleHelperText, setTitleHelperText] = useState('');
  const [detailsHelperText, setDetailsHelperText] = useState('');
  const [category, setCategory] = useState('work');

  const handleSubmit = async (e) => {
    e.preventDefault();

    setTitleError(false);
    setDetailsError(false);
    setTitleHelperText('');
    setDetailsHelperText('');

    if (!title) {
      setTitleError(true);
      setTitleHelperText('Please enter a title');
    }

    if (!details) {
      setDetailsError(true);
      setDetailsHelperText('Please add the details');
    }

    if (title && details) {
      fetch('http://localhost:3000/notes', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ title, details, category }),
      }).then(() => history.push('/'));
    }
  };

  return (
    <Container>
      <Typography variant="h6" color="textSecondary" component="h2" gutterBottom>
        Create a New Note
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          label="Note Title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className={field}
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={titleError}
          helperText={titleHelperText}
        />

        <TextField
          label="Note Details"
          onChange={(e) => setDetails(e.target.value)}
          value={details}
          className={field}
          variant="outlined"
          color="secondary"
          minRows="4"
          multiline
          fullWidth
          required
          error={detailsError}
          helperText={detailsHelperText}
        />

        <FormControl className={field}>
          <FormLabel color="secondary">Note Category</FormLabel>
          <RadioGroup onChange={(e) => setCategory(e.target.value)} value={category}>
            <FormControlLabel value="work" control={<Radio />} label="Work" />
            <FormControlLabel value="to-do" control={<Radio />} label="To-Do" />
            <FormControlLabel value="finance" control={<Radio />} label="Finance" />
            <FormControlLabel value="reminder" control={<Radio />} label="Reminder" />
          </RadioGroup>
        </FormControl>

        <Button
          type="submit"
          variant="contained"
          color="secondary"
          startIcon={<SendIcon />}
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default Create;
