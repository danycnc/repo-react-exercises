import { useEffect, useRef, useState } from 'react';

const CarDetails = ({ initialData }) => {
  const [data, setData] = useState(initialData);
  const [model, setModel] = useState(initialData.model);
  const [year, setYear] = useState(initialData.year);
  const [color, setColor] = useState(initialData.color);

  const inputRef = useRef(initialData);

  console.log(inputRef);

  useEffect(() => {
    setModel(inputRef.current.elements.model.value);
    console.log(model);
  }, []);

  //   console.log(inputRef);

  //   const handleChange = (event) => {
  //     const { name, value } = event.target;

  // setData((data) => {
  //   return {
  //     ...data,
  //     [name]: value,
  //   };
  // });
  //   };

  return (
    <form ref={inputRef}>
      <label>
        Model:
        <input name='model'></input>
      </label>
      <label>
        Year:
        <input name='year'></input>
      </label>
      <label>
        Color:
        <input name='color'></input>
      </label>
    </form>
  );
};

export default CarDetails;
