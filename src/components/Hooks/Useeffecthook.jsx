import { useEffect, useState } from "react";

function Useeffecthook() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true)
    const url = 'https://jsonplaceholder.typicode.com/users'
    const fetchUser = async () => {
        const result = await fetch(url);
        const resultdata = await result.json()
        setUsers(resultdata)
        setLoading(false)
    }
    useEffect(() => {
        fetchUser()
    }, [])
    return (
        <>
            <p>UseEffect hook is used to perform side effects like fetching data, DOM manipulation, event listeners it is similar to lifecycle method like componentdidmount and componentdidupdate</p>
            <ul>
                {loading ? <p>Loading...</p> :
                    users.map((user) => (
                        <li>{user.name}</li>
                    ))}
            </ul>
        </>
    )
}

export default Useeffecthook