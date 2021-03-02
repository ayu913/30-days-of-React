import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const CreateNode = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const addEvent = () => {
    props.passNote(note);
  };

  return (
    <>
      <div className="main_note">
        <form>
          <input
            type="text"
            value={note.title}
            name="title"
            onChange={InputEvent}
            placeholder="Title"
            autoComplete="off"
          />
          <textarea
            rows=""
            column=""
            name="content"
            value={note.content}
            onChange={InputEvent}
            placeholder="Write a note"
          ></textarea>
          <Button onClick={addEvent}>
            <AddIcon className="plus_sign"></AddIcon>
          </Button>
        </form>
      </div>
    </>
  );
};

export default CreateNode;
