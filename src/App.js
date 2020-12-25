import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  a: ["Andaman Islands", "Baratang Island", "Neil Island", "Port Balir"],
  b: ["Europe Musee ", "Jardin Des ", "Le Marais", "Notre Dame"],
  c: ["Thailand ", "Similan Islands", "Mae Hong Son", "Nakhon Ratchasima"],
  d: ["Dubai Souks", " Burj Khalifa", "Dubai Frame", "Shindagha Museum"],
  e: ["Ladakh Rupshu Trek", "Chadar Trek", "Hemis Trek", "Kharnak Tre"]
};
var meaning2 = 0;
//var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");
  var [meaning1, setMeaning1] = useState("");

  /* var ej = emojisWeKnow.map((emoji) => {
    return (
      <span
        onClick={() => emojiClickHandler(emoji)}
        style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
        key={emoji}
      >
        {emoji}
      </span>
    );
  });

  function emojiInputHandler(event) {
    // processing
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    setMeaning(meaning); // react call to show output
  }*/

  function emojiClickHandler(emoji) {
    // processing
    //var meaning = emojiDictionary[emoji];
    meaning2 = emojiDictionary[emoji];
    meaning1 = meaning2.map((item) => {
      return (
        <li
          style={{
            height: "7vh",

            marginBottom: "10px",
            paddingTop: "10px",
            margin: "auto",
            width: "45%",
            border: "2px solid black",
            fontSize: "larger",
            fontWeight: "bold",
            color: "black",
            backgroundColor: "white",
            textAlign: "center",
            borderBottomLeftRadius: "1rem",
            borderBottomRightRadius: "1rem",
            borderTopLeftRadius: "1rem",
            borderTopRightRadius: "1rem"
          }}
        >
          {item}
        </li>
      );
    });
    setMeaning1(meaning1);
    console.log(meaning1);

    setMeaning(meaning); // react call to show output
  }
  return (
    <div className="App">
      <h1 style={{ color: "white" }}>Must-Visit Sights</h1>

      <h2> {/*meaning*/} </h2>
      {/* Actual output set by React using useState */}

      <h3 style={{ color: "white" }}> Highlights </h3>
      <span
        style={{
          height: "7vh",
          fontSize: "2rem",
          padding: "0.5rem",
          cursor: "pointer",
          backgroundColor: "black",
          width: "85%",
          display: "block",
          border: "2px solid white",
          margin: "auto",
          borderBottomLeftRadius: "1rem",
          borderBottomRightRadius: "1rem",
          borderTopRightRadius: "1rem",
          borderTopLeftRadius: "1rem"
        }}
      >
        <img
          onClick={() => emojiClickHandler("a")}
          style={{
            backgroundColor: "white",
            marginRight: "1rem",
            borderBottomLeftRadius: "0.5rem",
            borderBottomRightRadius: "0.5rem",
            borderTopRightRadius: "0.5rem",
            borderTopLeftRadius: "0.5rem"
          }}
          src="andaman.jpg"
          alt="girl in a jacket"
        />

        <img
          onClick={() => emojiClickHandler("b")}
          style={{
            backgroundColor: "white",
            marginRight: "1rem",
            borderBottomLeftRadius: "0.5rem",
            borderBottomRightRadius: "0.5rem",
            borderTopRightRadius: "0.5rem",
            borderTopLeftRadius: "0.5rem"
          }}
          src="europe.jpg"
          alt="girl in a jacket"
        />
        <img
          onClick={() => emojiClickHandler("c")}
          style={{
            backgroundColor: "white",
            marginRight: "1rem",
            borderBottomLeftRadius: "0.5rem",
            borderBottomRightRadius: "0.5rem",
            borderTopRightRadius: "0.5rem",
            borderTopLeftRadius: "0.5rem"
          }}
          src="thailand.jpg"
          alt="girl in a jacket"
        />
        <img
          onClick={() => emojiClickHandler("d")}
          style={{
            backgroundColor: "white",
            marginRight: "1rem",
            borderBottomLeftRadius: "0.5rem",
            borderBottomRightRadius: "0.5rem",
            borderTopRightRadius: "0.5rem",
            borderTopLeftRadius: "0.5rem"
          }}
          src="dubai.jpg"
          alt="girl in a jacket"
        />
        <img
          onClick={() => emojiClickHandler("e")}
          style={{
            backgroundColor: "white",

            marginRight: "1rem",
            borderBottomLeftRadius: "0.5rem",
            borderBottomRightRadius: "0.5rem",
            borderTopRightRadius: "0.5rem",
            borderTopLeftRadius: "0.5rem"
          }}
          src="ladakh.jpg"
          alt="girl in a jacket"
        />
      </span>

      <h1>{/*emojisWeKnow*/}</h1>
      <ul
        style={{
          marginTop: "70px",
          marginRight: "3rem",
          color: "black",
          listStyle: "none",
          fontWeight: "bold"
        }}
      >
        {meaning1}
      </ul>
    </div>
  );
}
