function AppTitle({ adminName }) {
  return (
    <h1 className="app-title">
      <span className="app-title__span">{adminName}'s </span>
      <span className="app-title__span">Notes </span>
      <span className="app-title__span">App</span>
    </h1>
  );
}

export default AppTitle;
