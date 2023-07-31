import { useSelector } from "react-redux";
import { marked } from "marked";
import Toolbar from "./Toolbar";

const RenderBox = () => {
  const string = useSelector((state) => state); // Acceder al estado de la store
  const renderedMarkdown = marked(string, { sanitize: true, breaks: true });

  return (
    <div id="render-box">
      <Toolbar title={"Previewer"} id={"render-box"} />
      <div
        id="preview"
        className="pt-3"
        dangerouslySetInnerHTML={{ __html: renderedMarkdown }}
      />
    </div>
  );
};

export default RenderBox;
