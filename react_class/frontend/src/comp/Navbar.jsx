function Navbar(props) {
  console.log(props);
  let firstName = "Devanshu";

  const listItems = {
    backgroundColor: "skyblue",
    color: "brown",
  };

  return (
    <>
      <h1 className="nav">@Navbar {firstName} </h1>
      <h2 className="text"></h2>
      <p style={{ backgroundColor: "yellow", textAlign: "center" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, rem?
      </p>
      <ul style={listItems}>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
      </ul>
    </>
  );
}

export default Navbar;
