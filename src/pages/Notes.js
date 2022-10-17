import { Container, Grid, Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

const Notes = () => {
  const [notes, setNotes] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:3000/notes');
      if (!res.ok || res.status != 200) throw new Error(`NOOOOOO`);

      const notes = await res.json();
      setNotes(notes);
    };
    fetchData().catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <Grid container>
        {notes &&
          notes.map((note) => (
            <Grid item key={note.id} xs={12} md={6} lg={4}>
              <Paper>{note.title}</Paper>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default Notes;
