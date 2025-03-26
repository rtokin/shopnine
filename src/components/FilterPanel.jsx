import React from 'react';
import { Button, ButtonGroup } from '@mui/material';
const FilterPanel = ({ onFilterChange }) => {
 const categories = ['Все', 'электроника', 'одежда', 'книги'];
 return (
 <ButtonGroup variant="contained" sx={{ my: 2 }}>
 {categories.map((category) => (
 <Button key={category} onClick={() => onFilterChange(category)}>
 {category}
 </Button>
 ))}
 </ButtonGroup>
 );
};
export default FilterPanel;