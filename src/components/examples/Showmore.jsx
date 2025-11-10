import { useEffect, useState } from "react";
import "../../App.css";

function Showmore() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const url = `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        const data = await res.json();
        setItems(prev => [...prev, ...data]);
      } catch (err) {
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  const showMore = () => {
    setPage(prev => prev + 1); // triggers next fetch automatically
  };

  return (
    <>
      <div className="items-container">
        {items.map((item) => (
          <div key={item.id}>
            <p>{item.id}</p>
          </div>
        ))}
      </div>

      <button onClick={showMore} disabled={loading}>
        {loading ? "Loading..." : "SHOW MORE"}
      </button>
    </>
  );
}

export default Showmore;
