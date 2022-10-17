import React, { useEffect, useState } from 'react';

const Notes = () => {
  const [notes, setNotes] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      console.log(`BEGIN`);

      const res = await fetch('http://localhost:3000/notes');
      if (!res.ok || res.status != 200) {
        throw new Error(`NOOOOOO`);
      }
      console.log(res);

      const notes = await res.json();
      console.log(notes);

      setNotes(notes);
    };
    fetchData().catch((err) => console.log(err));
  }, []);

  return <div>{notes && notes.map((note) => <p key={note.id}>{note.title}</p>)}</div>;
};

export default Notes;
