import React from "react";
import { Link } from 'react-router-dom';


const NotesListItem = ({ notes }) => (
  <li key={notes.id}>
     <Link to={`/${notes.id}/notes`}>
      <div>
        <h3>{notes.title}</h3>
        <p>{notes.noteBody}</p>
      </div>
      </Link>
  </li>
);

const NotesList = props => {
  return (
    <div>
      <ul>
        {props.items.map(notes => (
          <NotesListItem notes={notes} key={notes.id} />
        ))}
      </ul>
    </div>
  );
};

export default NotesList;
