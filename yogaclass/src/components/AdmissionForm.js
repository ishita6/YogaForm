import React, { useState } from 'react';
import axios from 'axios';

const AdmissionForm = () => {
// const [formData, setFormData] = useState({
//     name: '',
//     age: '',
//     selectedBatch: '',
// });

const [name , setName] = useState("")
const [age , setAge] = useState(0)
const [selectedBatch , setSelectedBatch] = useState("")

// const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

// e represents the event object
const handleNameChange = (e) => {
    setName(e.target.value);
};

const handleAgeChange = (e) => {
    setAge(e.target.value);
};

const handleSelectedBatchChange = (e) => {
    setSelectedBatch(e.target.value);
};

const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    // if (!name || !age || !selectedBatch) {
    //     alert('Please fill in all fields');
    //     return;
    // }

    //if we dont explicitely provide a key and a value while creating js object
    // js auto takes variable name as key and its value as the value corresponding to that key

    const formData = {
        name,
        age,
        selectedBatch
    }
    try {
        // Make a call to the backend API to store user data
        // const response = await axios.get('https://randomuser.me/api/');
        const response = await axios.post('http://localhost:8000/api/enroll', formData);
        console.log(response.data); // Log the response from the server
    } catch (error) {
        console.error('Error submitting form:', error);
    }
};

return (
    <div className='main-container'>
      <h1>Yoga Class Admission Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter you Name:
          <input type="text" name="name" value={name} onChange={handleNameChange} />
        </label>
         <br />
        <label>
         Enter your Age:
          <input type="number" name="age" value={age} onChange={handleAgeChange} />
        </label>
        <br />
        <label>
          Select Batch:
          <select name="selectedBatch" value={selectedBatch} onChange={handleSelectedBatchChange}>
            <option value="">Select Batch</option>
            <option value="6-7AM">6-7AM</option>
            <option value="7-8AM">7-8AM</option>
            <option value="8-9AM">8-9AM</option>
            <option value="5-6PM">5-6PM</option>
          </select>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AdmissionForm;
