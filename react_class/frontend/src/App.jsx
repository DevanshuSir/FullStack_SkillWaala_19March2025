import Card from "./comp/Card";
import Navbar from "./comp/Navbar";
import Counter from "./day41/Counter";
import Hooks from "./day41/Hooks";

function App() {
  let userName = "Devanshu Sir";
  let loginInfo = "Kal ho na ho";

  const cardData = [
    {
      userName: "Devanshu sir",
    },
    {
      userName: "Manny sir",
    },
    {
      userName: "Swastik sir",
    },
    {
      userName: "Aman sir",
    },
    {
      userName: "Devanshu sir",
    },
    {
      userName: "Manny sir",
    },
    {
      userName: "Swastik sir",
    },
    {
      userName: "Aman sir",
    },
  ];

  return (
    <>
      {/* <Navbar login={loginInfo} user={userName} />

      {cardData.map((value) => (
        <Card userValue={value} />
      ))} */}

      <Hooks />
      <Counter />
    </>
  );
}

export default App;
