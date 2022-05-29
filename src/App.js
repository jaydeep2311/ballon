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
  //usestate for random color list
  const [colorList, setcolorList] = useState([]);
  //use state for taking input from user for shooting ballon
  const [inputnum, setinputnum] = useState("");
  //list of state for showing ballons inside empty div
  const [divCircle, setdivCircle] = useState([]);
  const [original, setoriginal] = useState([]);
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
      setoriginal(randomColorlist);
    }
  }, []);
  const handleCirclepush = (e) => {
    //function for taking input from user
    e.preventDefault();
    let divcolorlist;
    let newlist = [];
    //creating the new updated colorlist after shooting the ballon
    if (inputnum > colorList.length) {
      alert("Please select valid number");
    }
    for (var i = 0; i < colorList.length; i++) {
      if (i !== Number(inputnum) - 1) {
        newlist.push(colorList[i]);
      } else {
        setdivCircle([...divCircle, colorList[i]]);
      }
    }
    setcolorList(newlist);
  };
  const returnBallon = (e, idx, el) => {
    //function to return the ballon to its orignal place
    let index = original.indexOf(el);
    let newdivlist = divCircle.filter((d, i) => {
      return i !== idx;
    });
    setdivCircle(newdivlist);
    //loop to refactor the the circles inside the empty div

    setdivCircle(newdivlist);
    let newColorslist = [];
    for (var j = 0; j < original.length; j++) {
      if (!newdivlist.includes(original[j])) {
        newColorslist.push(original[j]);
      }
    }
    setcolorList(newColorslist);
  };
  return (
    <div>
      <h3 className="title">Empty div</h3>
      <div className="main-div">
        <div className="empty-div">
          {/* Empty div section */}
          {divCircle.map((el, i) => {
            return (
              <div
                onClick={(e) => returnBallon(e, i, el)}
                style={{
                  width: "80px",
                  height: "80px",
                  backgroundColor: `${colorsmap[el]}`,
                  borderRadius: "50%",
                  marginBottom: "10px",
                  boxShadow: `5px 5px 5px  5px ${colorsmap[el]}`,
                  border: `10px solid ${colorsmap[el]}`,
                }}
              ></div>
            );
          })}
        </div>
        <div className="circle-list">
          {colorList.map((el, i) => {
            return (
              <div
                key={i}
                style={{
                  width: "80px",
                  height: "80px",
                  backgroundColor: `${colorsmap[el]}`,
                  boxShadow: `5px 5px 5px  5px ${colorsmap[el]}`,
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
