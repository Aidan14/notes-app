import { FaTrash } from "react-icons/fa";
import { useEffect } from "react";

function NoteRow({ content, category }) {
  useEffect(() => {
    const tx = document.getElementsByTagName("textarea");

    for (let i = 0; i < tx.length; i++) {
      tx[i].setAttribute(
        "style",
        "height:" + tx[i].scrollHeight + "px;overflow-y:hidden;"
      );
      tx[i].addEventListener("input", OnInput, false);
    }

    function OnInput() {
      this.style.height = "auto";
      this.style.height = this.scrollHeight + "px";
    }
  }, []);

  return (
    <tr>
      <td className="note-table__td">
        <textarea
          rows={1}
          spellCheck="false"
          className="td__input"
          type="text"
          defaultValue={content}
        />
      </td>
      <td className="note-table__td">
        <input
          type="text"
          spellCheck="false"
          className="td__input"
          defaultValue={category}
        />
      </td>
      <td className="note-table__td">
        <FaTrash className="button--delete" fill="rgb(255, 115, 115)" />
      </td>
    </tr>
  );
}

export default NoteRow;
