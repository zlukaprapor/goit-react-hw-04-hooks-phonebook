import PropTypes from "prop-types";
import { Label } from "./Filter.stiled";

const Filter = ({ filter, inputHandler }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <Label>
        <input
          onChange={inputHandler}
          type="text"
          name="filter"
          placeholder="Enter name..."
          value={filter}
        />
      </Label>
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  inputHandler: PropTypes.func,
};

export default Filter;
