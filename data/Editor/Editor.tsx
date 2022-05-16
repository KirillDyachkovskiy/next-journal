import EditorJS from "@editorjs/editorjs";
import { FC, useEffect } from "react";

const Editor: FC = () => {
  useEffect(() => {
    const editor = new EditorJS();

    return () => {
      editor.isReady.then(editor.destroy).catch(console.error);
    };
  }, []);

  return <div id="editorjs" />;
};

export default Editor;
