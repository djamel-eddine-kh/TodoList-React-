() => {
    const [inputValue, setInputValue] = React.useState('');
    const [value, setValue] = React.useState('');
    
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        setValue(inputValue)
      };
    
    return <form onSubmit={handleSubmit} className="example" >
    <input type="text" value={inputValue} onChange={handleChange} />
    <button className="btn1" type="submit">Submit</button>
    <strong>
      {value}
    </strong>
    </form> 
    };