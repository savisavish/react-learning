import { useEffect, useState } from "react";
import "../../App.css";

function Pagination() {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const url = `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=8`;

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await fetch(url);
                const data = await res.json();
                setItems(data);
            } catch (err) {
                console.error("Error:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [page]); // ✅ refetch whenever page changes

    const nextPage = () => setPage(prev => prev + 1);
    const prevPage = () => setPage(prev => (prev > 1 ? prev - 1 : 1));

    return (
        <>
            {loading && <p>Loading...</p>}
            <div className="items-container">
                {items.map((item) => (
                    <div key={item.id}>
                        <p>{item.id}</p>
                    </div>
                ))}
            </div>

            <div className="pagination-controls">
                <button onClick={prevPage} disabled={page === 1 || loading}>
                    &lt; Prev
                </button>
                <span> Page {page} </span>
                <button onClick={nextPage} disabled={loading}>
                    Next &gt;
                </button>
            </div>

        </>
    );
}

export default Pagination;
