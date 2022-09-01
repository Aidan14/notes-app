import NoteRow from "./NoteRow";

function Table({ rows }) {
  return (
    <div className="table-container">
      <table className="note-table">
        <TableHead headers={["Content", "Category", ""]} />
        <tbody>
          {rows.map((row) => (
            <NoteRow
              key={row._id}
              content={row.content}
              category={row.category}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TableHead({ headers }) {
  return (
    <thead>
      <tr>
        {headers.map((header, index) => {
          return (
            <th key={index} className="note-table__th">
              {header}
            </th>
          );
        })}
      </tr>
    </thead>
  );
}

export default Table;
