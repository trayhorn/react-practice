import { nanoid } from '@reduxjs/toolkit';

export default function SelectOption({ name, value }) {
  const formatValue = (name, value) => {
    return name + ' ' + value[0].toUpperCase() + value.slice(1);
  };

  return (
    <>
      {value.length === 0 ? (
        <option>{name}</option>
      ) : (
        value.map(value => (
          <option key={nanoid()}>{formatValue(name, value)}</option>
        ))
      )}
    </>
  );
}
