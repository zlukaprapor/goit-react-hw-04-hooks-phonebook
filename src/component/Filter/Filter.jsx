import PropTypes from 'prop-types';
import { Label } from './Filter.stiled';

const Filter = ({ value, inputHandler }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <Label>
        <input
          onChange={inputHandler}
          type="text"
          name="filter"
          placeholder="Enter name..."
          value={value}
        />
      </Label>
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  inputHandler: PropTypes.func,
};

export default Filter;
