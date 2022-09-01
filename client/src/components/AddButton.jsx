function AddButton({ rows }) {
  const handleAdd = async () => {
    const response = await fetch("http://localhost:4000/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: { content: "", category: "" },
    });
    alert("hello");
    console.log(response);
  };

  return (
    <button className="button--add" onClick={handleAdd}>
      Add
    </button>
  );
}

export default AddButton;
