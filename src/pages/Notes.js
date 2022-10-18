import { Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import NoteCard from '../components/NoteCard';
import Masonry from 'react-masonry-css';

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

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <Container>
      <Masonry breakpointCols={breakpoints} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
        {notes &&
          notes.map((note) => (
            <div key={note.id}>
              <NoteCard handleDelete={handleDelete} note={note} />
            </div>
          ))}
      </Masonry>
    </Container>
  );
};

export default Notes;
