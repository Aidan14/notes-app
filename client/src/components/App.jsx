import { useEffect, useState } from "react";
import Table from "./Table";
import AddButton from "./AddButton";
import SearchBar from "./SearchBar";
import AppTitle from "./AppTitle";

function App() {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    const response = await fetch("http://localhost:4000/notes");
    const notes = await response.json();
    setNotes(notes);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <>
      <AppTitle adminName="Aidan" />
      <div className="table-bar">
        <AddButton rows={notes} />
        <SearchBar />
      </div>
      <Table rows={notes} />
    </>
  );
}

export default App;
