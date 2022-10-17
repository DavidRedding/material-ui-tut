import { Container, Grid, Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import NoteCard from '../components/NoteCard';

const Notes = () => {
  const [notes, setNotes] = useState(null);

  const handleDelete = async (id) => {
    // updating database
    await fetch(`http://localhost:3000/notes/${id}`, { method: 'DELETE' }).then(() => console.log('Delete successful'));

    // updating local state
    let newNotes = notes.filter((note) => note.id != id);
    setNotes(newNotes);
  };

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
      <Grid container spacing={3}>
        {notes &&
          notes.map((note) => (
            <Grid item key={note.id} xs={12} md={6} lg={4}>
              <NoteCard handleDelete={handleDelete} note={note} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default Notes;
