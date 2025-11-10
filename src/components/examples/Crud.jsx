import { useEffect, useState } from 'react';
import '../../App.css';

function Crud() {
    const [users, setUsers] = useState([]);
    const [isEditing, setIsEditing] = useState(null);
    const [formData, setFormData] = useState({ name: '', email: '' });
    const [error, setError] = useState('');
    const url = 'http://localhost:5000/users'; // ✅ JSON Server URL

    // 🔹 GET (Read)
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setUsers(data))
            .catch(err => console.error('Error:', err));
    }, []);

    // 🔹 Handle form inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // 🔹 POST (Add)
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email) {
            setError('Please fill in both Name and Email.');
            return;
        }
        setError('');
        if (isEditing) {
            // 🔸 PUT (Update existing user)
            const response = await fetch(`${url}/${isEditing}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const updatedUser = await response.json();
            setUsers(users.map(u => (u.id === isEditing ? updatedUser : u)));
            setIsEditing(null);
        } else {
            // 🔸 POST (Add new user)
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const newUser = await response.json();
            setUsers(prev => [...prev, newUser]);
        }

        // Clear form after submission
        setFormData({ name: '', email: '' });
    };

    // 🔹 DELETE
    const deleteUser = async (id) => {
        await fetch(`${url}/${id}`, { method: 'DELETE' });
        setUsers(users.filter(u => u.id !== id));
    };

    // 🔹 Edit mode
    const startEdit = (user) => {
        setIsEditing(user.id);
        setFormData({ name: user.name, email: user.email });
    };

    // 🔹 Cancel edit
    const cancelEdit = () => {
        setIsEditing(null);
        setFormData({ name: '', email: '' });
    };

    return (
        <div className="crud-container">
            <form onSubmit={handleSubmit}>
                <table>
                    <thead>
                        <tr>
                            <th>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </th>
                            <th>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </th>
                            <th>
                                <button type="submit">{isEditing ? 'Update' : 'Add'}</button>
                                {isEditing && (
                                    <button type="button" onClick={cancelEdit} style={{ marginLeft: '8px' }}>
                                        Cancel
                                    </button>
                                )}
                            </th>
                        </tr>
                    </thead>
                </table>
                <p className='error'>{error}</p>

            </form>
            
            <hr />

            <table>
                <thead>
                    <tr>
                        <th>Id</th><th>Name</th><th>Email</th><th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user,index) => (
                        <tr key={user.id}>
                            <td>{index+1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <button onClick={() => startEdit(user)}>Edit</button>
                                <button onClick={() => deleteUser(user.id)} style={{ marginLeft: '8px' }}>
                                    Del
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Crud;
