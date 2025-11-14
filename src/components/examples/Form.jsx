import { useState } from "react";
import './form.css';
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

    const countryStateData = {
        India: ["Karnataka", "Maharashtra", "Tamil Nadu", "Kerala", "Delhi"],
        USA: ["California", "Texas", "Florida", "New York", "Washington"],
        Australia: ["New South Wales", "Queensland", "Victoria", "Tasmania"],
        Canada: ["Ontario", "Quebec", "British Columbia", "Alberta"],
        UK: ["England", "Wales", "Scotland", "Northern Ireland"],
    };

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    // Country & State functions
    const handleCountryChange = (e) => {
        setFormData({
            ...formData,
            country: e.target.value,
            state: "", // reset state
        });
    };

    const handleStateChange = (e) => {
        setFormData({
            ...formData,
            state: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        validateForm();
    };

    const validateForm = () => {
        let tempErrors = {};
        Object.keys(formData).forEach(key => {
            if (!formData[key]) tempErrors[key] = true;
        });

        setErrors(tempErrors);

        if (Object.keys(tempErrors).length === 0) {
            console.log("Form Submitted:", formData);
        }
    };

    return (
        <>
            <h2>New Form</h2>
            <form onSubmit={handleSubmit} className="form-container">
                <div>
                    <input type="text" name="name" placeholder="Name" onChange={handleChange} autoComplete="off" />
                    {errors.name && <span className="error">Please provide Name</span>}
                </div>

                <div>
                    <input type="text" name="email" placeholder="Email" onChange={handleChange} autoComplete="off" />
                    {errors.email && <span className="error">Please provide Email</span>}
                </div>

                <div>
                    <input type="text" name="phone" placeholder="Phone" onChange={handleChange} autoComplete="off" />
                    {errors.phone && <span className="error">Please provide Phone Number</span>}
                </div>

                <div>
                    <input type="text" name="address" placeholder="Address" onChange={handleChange} autoComplete="off" />
                    {errors.address && <span className="error">Please provide Address</span>}
                </div>

                <div>
                    <select name="country" value={formData.country} onChange={handleCountryChange}>
                        <option value="">Select Country</option>
                        {Object.keys(countryStateData).map((country) => (
                            <option key={country} value={country}>{country}</option>
                        ))}
                    </select>
                    {errors.country && <span className="error">Please provide Country</span>}
                </div>

                <div>
                    <select
                        name="state"
                        value={formData.state}
                        onChange={handleStateChange}
                        disabled={!formData.country}
                    >
                        <option value="">Select State</option>
                        {formData.country &&
                            countryStateData[formData.country].map((state) => (
                                <option key={state} value={state}>{state}</option>
                            ))}
                    </select>
                    {errors.state && <span className="error">Please provide State</span>}
                </div>

                Gender:
                <label>
                    <input type="radio" name="gender" value="Male" onChange={handleChange} /> Male
                </label>
                <label>
                    <input type="radio" name="gender" value="Female" onChange={handleChange} /> Female
                </label>
                {errors.gender && <span className="error">Please select Gender</span>}

                <Stack spacing={2} direction="row">
                    <Button type="submit" variant="contained">Submit</Button>
                </Stack>
            </form>
        </>
    );
}

export default Form;
