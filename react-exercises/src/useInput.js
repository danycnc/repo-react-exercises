import { useState } from 'react';

const useInput = () => {
  const [data, setData] = useState({
    username: '',
    password: '',
  });

  const handleInput = (event) => {
    const { name, value } = event.target;
    setData((data) => {
      return {
        ...data,
        [name]: value,
      };
    });
  };

  return { data, handleInput };
};

export default useInput;
