import { Avatar, Card, CardContent, CardHeader, IconButton, makeStyles, Typography } from '@material-ui/core';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { yellow, green, pink, blue } from '@material-ui/core/colors';

const useStyles = makeStyles({
  avatar: {
    background: (note) => {
      if (note.category == 'work') {
        return yellow[700];
      }
      if (note.category == 'finance') {
        return green[500];
      }
      if (note.category == 'to-do') {
        return pink[500];
      }
      return blue[500];
    },
  },
});

const NoteCard = ({ note, handleDelete }) => {
  const classes = useStyles(note);
  return (
    <div>
      <Card>
        <CardHeader
          avatar={<Avatar className={classes.avatar}>{note.category[0].toUpperCase()}</Avatar>}
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutlineIcon />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default NoteCard;
