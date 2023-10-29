/* eslint-disable react/prop-types */
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

function FormList({ addTask }) {
  const [task, setTask] = useState("");
  const [validation, setValidation] = useState(true);

  const formSubmitted = (event) => {
    event.preventDefault();
    if (task == "") {
      setValidation(false);
    } else {
      setValidation(true);
      addTask(task);
      setTask("");
    }
  };
  const getContentTask = (event) => {
    setTask(event.currentTarget.value);
  };

  return (
    <div className="m-5 d-flex justify-content-center">
      <form onSubmit={formSubmitted}>
        {validation ? (
          <TextField
            id="outlined-basic"
            label="Aggiungi task"
            variant="outlined"
            onChange={getContentTask}
            value={task}
          />
        ) : (
          <TextField
            error
            id="outlined-error"
            label="Inserisci qualcosa"
            defaultValue="Aggiungi task"
            onChange={getContentTask}
            value={task}
          />
        )}

        <Button
          variant="contained"
          color="success"
          className="my-3 ms-2"
          type="submit"
        >
          Aggiungi
        </Button>
      </form>
    </div>
  );
}

export default FormList;
