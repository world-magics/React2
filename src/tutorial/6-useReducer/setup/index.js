import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
// import { setCacheNameDetails } from "workbox-core";
// reducer function
const reducer = (state, action) => {
  const newPeople = [...state.people, action.payload];
  if (action.type === "ADD_ITEM") {
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: "item added",
    };
  }
  if (action.type === "NO_VALUE") {
    return { ...state, isModalOpen: true, modalContent: "please enter value" };
  }
  if (action.type === "CLOSE_MODAL") {
    return { ...state, isModalOpen: false };
  }
  //   return state;
  throw new Error("no matching action type");
};
const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "",
};
const Index = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);
  //   const [people, setPeople] = useState(data);
  //   const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };
      //   setShowModal(true);
      //   setPeople([...people, { id: new Date().getTime().toString(), name }]);
      //   setName("");

      dispatch({ type: "ADD_ITEM", payload: newItem });
    } else {
      //   setShowModal(true);
      dispatch({ type: "RANDOM" });
    }
  };
  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };
  return (
    <>
      {state.isModalOpen && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
      <form action="" className="form" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button className="btn" type="submit">
          Add people
        </button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id}>
            <h4>{person.name}</h4>
          </div>
        );
      })}
    </>
  );
};

export default Index;
