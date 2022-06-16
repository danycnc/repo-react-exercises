import React, { createRef, useState } from 'react';

const UncontrolledLogin = (initialData) => {
  const _formRef = createRef();

  // non so come passare i valori di "data" agli input :(

  const [data, setData] = useState(initialData);

  const submitForm = (event) => {
    event.preventDefault();
    const model = event.target.elements.model.value;
    const year = event.target.elements.year.value;
    const color = event.target.elements.color.value;

    return console.log(model, year, color);
  };

  return (
    <div>
      <form ref={_formRef} onSubmit={submitForm}>
        Model
        <input name='model' />
        <br />
        Year
        <input name='year' />
        <br />
        Color
        <input name='color' />
        <br />
        <button>Submit</button>
        <button type='reset'>Reset</button>
      </form>
    </div>
  );
};

export default UncontrolledLogin;
