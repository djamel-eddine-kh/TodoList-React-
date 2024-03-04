import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import Line from './listComp';

const TodoList = () => {
  const [inputText, setInputText] = useState('');
  const [lines, setLines] = useState([]);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleAddLine = (event) => {
    event.preventDefault();

    if (inputText.trim() !== '') {
      setLines([...lines, inputText]);
      setInputText('');
    }
  };

  const handleDeleteLine = (index) => {
    const newLines = [...lines];
    newLines.splice(index, 1);
    setLines(newLines);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom style={{ marginTop: '20px' }}>
        Todo List
      </Typography>
      <form onSubmit={handleAddLine}>
        <TextField
          fullWidth
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Enter your todo"
          variant="outlined"
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>Add</Button>
      </form>

      <Box mt={2} />

      {lines.map((line, index) => (
        <Line
          key={index}
          text={line}
          onDelete={() => handleDeleteLine(index)}
        />
      ))}
    </Container>
  );
};

export default TodoList;

/*import React, { useState } from 'react';
import Line from './listComp';

// TodoList component
const TodoList = () => {
  const [inputText, setInputText] = useState('');
  const [lines, setLines] = useState([]);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleAddLine = (event) => {
    event.preventDefault();

    if (inputText.trim() !== '') {
      setLines([...lines, inputText]);
      setInputText('');
    }
  };

  const handleDeleteLine = (index) => {
    const newLines = [...lines];
    newLines.splice(index, 1);
    setLines(newLines);
  };

  return (
    <div>
      <form onSubmit={handleAddLine}>
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Enter your todo"
        />
        <button type="submit">Submit</button>
      </form>

      {lines.map((line, index) => (
        <Line
          key={index}
          text={line}
          onDelete={() => handleDeleteLine(index)}
        />
      ))}
    </div>
  );
};

export default TodoList;
*/