import { useEffect, useState } from "react";
import "./App.css";

function App() {
  //list of colors mentioned in the assignment
  let colorsmap = {
    1: "#BDF5BD",
    2: "#FFE797 ",
    3: "#0000FF",
    4: "#CBC3E3",
    5: "#ADD8E6",
  };

  const [colorList, setcolorList] = useState([]);
  const [inputnum, setinputnum] = useState("");
  useEffect(() => {
    //function to generate random nunber between 1 to 5
    function randomIntFromInterval(min, max) {
      // min and max included
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    //List of random colors genrated after mapping random number in the colorsmap object from given map color object
    const randomColorlist = [];
    while (randomColorlist.length < 5) {
      const rndInt = randomIntFromInterval(1, 5);
      if (randomColorlist.indexOf(rndInt) === -1) {
        randomColorlist.push(rndInt);
      }
      setcolorList(randomColorlist);
    }
  }, []);
  const handleCirclepush = (e) => {};
  return (
    <div>
      <h3>Empty div</h3>
      <div className="main-div">
        <div className="empty-div"></div>
        <div className="circle-list">
          {colorList.map((el, i) => {
            return (
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  backgroundColor: `${colorsmap[el]}`,
                  borderRadius: "50%",
                  marginBottom: "10px",
                  border: `10px solid ${colorsmap[el]}`,
                }}
              ></div>
            );
          })}
        </div>
        <div className="shoot">
          <input
            type="number"
            min="1"
            max="5"
            value={inputnum}
            placeholder="Enter the number between 1 to 5"
            className="num-input"
            onChange={(e) => setinputnum(e.target.value)}
          />
          <button type="submit" onClick={(e) => handleCirclepush(e)}>
            shoot
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
