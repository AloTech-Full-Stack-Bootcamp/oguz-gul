import React from "react";
import "./styles.css";
import { connect } from "react-redux";
import { AddToList, Toggle, Clear } from "./actions/methods";
import { useState } from "react";

const App = (props) => {
  const [text, setText] = useState("");

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <div className="ekleme_formu">
        <input
          placeholer="Add to List"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          onClick={() => {
            setText("");
            props.AddToList(text);
          }}
        >
          Add
        </button>
      </div>
      <div className="liste">
        {props.list.map((item) => (
          <div
            onClick={() => props.Toggle(item.id)}
            key={item.id}
            className={item.done ? "yapildi" : ""}
          >
            {item.title}
          </div>
        ))}
      </div>
      <button onClick={() => props.Clear()} className="temizle">
        Clear Completed Ones
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    list: state.list,
  };
};

export default connect(mapStateToProps, { AddToList, Toggle, Clear })(App);
