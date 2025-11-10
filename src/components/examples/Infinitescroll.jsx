import { useEffect, useState } from "react";
import "../../App.css";

function Infinitescroll() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const url = `https://jsonplaceholder.typicode.com/photos?_page=${page}`
  useEffect(() => {
    let ignore = false; // ✅ flag to prevent duplicate effect calls
    const fetchData = async () => {
        setLoading(true);
        try {
            const res = await fetch(url);
            const data = await res.json();
            if (!ignore) {  // 👈 only update state if not ignored
                setItems((prevItems) => [...prevItems, ...data]);
            }
        } catch (err) {
            console.error("Error:", err);
        } finally {
            setLoading(false);
        }
    };
    fetchData();

    return () => { ignore = true }; // ✅ cleanup marks it safe
}, [url]);


  // Scroll event handler
  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 10 &&
      !loading
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  // Add scroll listener once
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return (
    <>
      <div className="items-container">
        {items.map((item) => (
          <div key={item.id} className="item">
            <p>{item.id}</p>
          </div>
        ))}
      </div>

      {loading && <p>Loading...</p>}
    </>
  );
}

export default Infinitescroll;
