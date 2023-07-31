import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { saveString } from "../store"; // Importa la acción desde el archivo store.js
import Toolbar from "./Toolbar";
import { firstCode } from "./defaultCode";

const CodeBox = () => {
  const dispatch = useDispatch(); // Obtener el dispatch de la store

  const [code, setCode] = useState(firstCode);

  useEffect(() => {}, [code]);

  const handleChange = (event) => {
    setCode(event.target.value);
    dispatch(saveString(event.target.value));
  };

  return (
    <div id="code-box" className="mb-4">
      <Toolbar title={"Editor"} id={"code-box"}/>
      <textarea
        wrap="true"
        defaultValue={firstCode}
        name=""
        id="editor"
        style={{ resize: "vertical" }}
        onChange={handleChange}
      />
    </div>
  );
};

export default CodeBox;
