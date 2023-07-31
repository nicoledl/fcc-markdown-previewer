// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import { FaFreeCodeCamp, FaExpandArrowsAlt, FaExpandAlt } from "react-icons/fa";
import $ from "jquery";

const Toolbar = ({ title, id }) => {
  const [expand, setExpand] = useState(false);

  const actionButton = (prop) => {
    const minHeight = prop === "none" ? "100vh" : "200px";

    if (id === "code-box") {
      $(`#render-box`).css("display", prop);
      $("#editor").css("min-height", minHeight);
    } else {
      $(`#code-box`).css("display", prop);
    }
    setExpand(!expand);
  };

  return (
    <div id="toolbar">
      <FaFreeCodeCamp size={20} className="ms-2 me-2" />
      <p className="m-0">{title}</p>
      {expand ? (
        <FaExpandAlt
          size={16}
          onClick={() => actionButton("block")}
          className="me-2"
          style={{ marginLeft: "auto" }}
        />
      ) : (
        <FaExpandArrowsAlt
          size={16}
          onClick={() => actionButton("none")}
          className="me-2"
          style={{ marginLeft: "auto" }}
        />
      )}
    </div>
  );
};

export default Toolbar;
