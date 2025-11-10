import { useState } from "react";
import "../../App.css";

function Javascript() {
  const topics = [
    {
      id: "1",
      title: "var, let and const",
      content: (
        <ul>
          <li>var — function scoped, can be redeclared and updated.</li>
          <li>let — block scoped, cannot be redeclared but can be updated.</li>
          <li>const — block scoped, cannot be redeclared or updated.</li>
        </ul>
      ),
    },
    {
      id: "2",
      title: "Closures",
      content: (
        <p>
          A closure lets a function access variables from its outer scope even
          after that scope has finished executing.
        </p>
      ),
    },
    {
      id: "3",
      title: "Event Loop",
      content: (
        <p>
          The event loop handles asynchronous callbacks in JavaScript,
          processing them once the call stack is empty.
        </p>
      ),
    },
  ];

  const [selectedId, setSelectedId] = useState("1");

  return (
    <div className="js_content">
      <div className="js_content_left">
        {topics.map((t) => (
          <div
            key={t.id}
            className={selectedId === t.id ? "active" : ""}
            onClick={() => setSelectedId(t.id)}
          >
            {t.title}
          </div>
        ))}
      </div>

      <div className="js_content_right">
        {topics.find((t) => t.id === selectedId)?.content}
      </div>
    </div>
  );
}

export default Javascript;
