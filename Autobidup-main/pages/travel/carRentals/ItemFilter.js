import { useState } from 'react';
import { Stack, Button } from '@mui/material';
const carAccessories = [
  { name: 'Floor mats', model: 'Model A' },
  { name: 'Roof rack', model: 'Model B' },
  { name: 'Seat covers', model: 'Model C' },
  { name: 'Cargo liner', model: 'Model D' },
  { name: 'Dash cam', model: 'Model E' },
];

const CarAccessoryFilter = () => {
  const [filteredAccessories, setFilteredAccessories] = useState([]);
  const [nameInput, setNameInput] = useState('');
  const [modelInput, setModelInput] = useState('');

  const handleNameInputChange = (event) => {
    setNameInput(event.target.value);
  };

  const handleModelInputChange = (event) => {
    setModelInput(event.target.value);
  };

  const handleFilterClick = () => {
    const filtered = carAccessories.filter(
      (accessory) =>
        accessory.name.toLowerCase().includes(nameInput.toLowerCase()) &&
        accessory.model.toLowerCase().includes(modelInput.toLowerCase())
    );
    setFilteredAccessories(filtered);
  };
  const handleCombinedInputChange = (event) => {
    const inputValue = event.target.value.toLowerCase();
    setFilteredAccessories(
      carAccessories.filter(
        (accessory) =>
          accessory.name.toLowerCase().includes(inputValue) ||
          accessory.model.toLowerCase().includes(inputValue)
      )
    );
  };

  return (
    <Stack mb="50px">
      <Stack style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <input
          type="text"
          placeholder="Search by accessory name or model or both"
          style={{
            padding: '10px',
            fontSize: '16px',
            border: '2px solid #ccc',
            borderRadius: '5px',
            marginRight: '10px',
            flex: 1,
          }}
          onChange={handleCombinedInputChange}
        />

        <Button variant="contained" onClick={handleFilterClick}>
          Filter
        </Button>
      </Stack>
      {/* <ul style={{ listStyleType: 'none', padding: '0', margin: '0', width: '50%' }}>
    {filteredAccessories.length > 0 ? (
      filteredAccessories.map((accessory, index) => (
        <li key={index} style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
          {accessory.name} - {accessory.model}
        </li>
      ))
    ) : (
      <p style={{ textAlign: 'center' }}>No accessories found.</p>
    )
    }
  </ul> */}
    </Stack>
  );
};

export default CarAccessoryFilter;
