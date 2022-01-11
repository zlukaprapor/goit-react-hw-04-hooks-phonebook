import PropTypes from "prop-types";
import { Button } from "./Contact.styled";

const ContactListItem = ({ id, name, number, deleteContact }) => {
  return (
    <>
      <li key={id}>
        {name}:{number}
        <Button onClick={() => deleteContact(id)}>Delete</Button>
      </li>
    </>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
