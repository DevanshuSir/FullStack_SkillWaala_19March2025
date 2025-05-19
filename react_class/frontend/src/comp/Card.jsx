import "./card.css";
import CardsCss from "./cards.module.css";
import CardImage from "../media/day 22 (2).jpg";
// import Another from "./Another";

function Card(props) {
  const { userValue } = props;
  console.log(userValue);
  // const { data } = props;

  // props.data = "Manny sir";

  // let myData = [{ UserName: "Dev", age: 12 }];

  return (
    <>
      <h1 className="text">Card Comp...</h1>
      <div className="card">
        <img src={CardImage} alt="" width={"100%"} />
        <h1 className={CardsCss.heading}>{userValue.userName}</h1>
        <h3 className={CardsCss.work}>Web Developer</h3>
        <p className={CardsCss.para}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, vel.
        </p>
      </div>
    </>
  );
}

export default Card;
