import { useState } from "react";
import './form.css'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Form() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        country: "",
        state: "",
        gender: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <>
            <h2>New Form</h2>
            <form onSubmit={handleSubmit} className="form-container">
                <div>
                    <input type="text" name="name" placeholder="Name" onChange={handleChange} autoComplete="off" />
                    <span className="error">Please provide Name</span>
                </div>
                <div>
                    <input type="text" name="email" placeholder="Email" onChange={handleChange} autoComplete="off" />
                    <span className="error">Please provide Email</span>
                </div>
                <div>
                    <input type="text" name="phone" placeholder="Phone" onChange={handleChange} autoComplete="off" />
                    <span className="error">Please provide Phone Number</span>
                </div>
                <div>
                    <input type="text" name="address" placeholder="Address" onChange={handleChange} autoComplete="off" />
                    <span className="error">Please provide Address</span></div>
                <div>
                    <input type="text" name="country" placeholder="Country" onChange={handleChange} autoComplete="off" />
                    <span className="error">Please provide Country</span></div>
                <div>
                    <input type="text" name="state" placeholder="State" onChange={handleChange} autoComplete="off" />
                    <span className="error">Please provide State</span></div>
                Gender:
                <label>
                    <input type="radio" name="gender" value="Male" onChange={handleChange} /> Male
                </label>
                <label>
                    <input type="radio" name="gender" value="Female" onChange={handleChange} /> Female
                </label>
                <Stack spacing={2} direction="row">

                    <Button variant="contained">Submit</Button>
                </Stack>
            </form>
        </>
    );
}

export default Form;
