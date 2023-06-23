
import Form from "./Form";
import {useState} from "react";
import Person from "./Person";


const App = () => {
  const [personList, setPeople] = useState([]);

  const addPeople = (person) => {
    setPeople([...personList, person])
  }

  return (
      <>
        <Form addPeople={addPeople}/>
        {personList.map((p, i) => <Person key={i} person={p}/>)}
      </>
  );
};

export default App;
