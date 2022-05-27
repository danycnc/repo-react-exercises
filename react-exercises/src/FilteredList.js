import { useMemo } from 'react';

const FilteredList = ({ list }) => {
  const filtered = useMemo(() => list.filter((item) => item.age > 18), [list]);

  return (
    <div>
      {filtered.map((item) => (
        <li key={item.id}>{`${item.name} ${item.age}`}</li>
      ))}
    </div>
  );
};

export default FilteredList;
