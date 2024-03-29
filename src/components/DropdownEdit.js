import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import styles from "../styles/DropdownEdit.module.css";
import { useHistory } from "react-router";
import { useSetCurrentUser } from "../contexts/CurrentUserContext";
import { axiosReq } from "../api/axiosDefaults";

const ThreeDots = React.forwardRef(({ onClick }, ref) => (
  <i className="fas fa-ellipsis-v" ref={ref} onClick={(e) => { e.preventDefault(); onClick(e); }} />
));

export const DropdownEdit = ({ handleEdit, handleDelete }) => {
  return (
    <Dropdown className="ml-auto" drop="left">
      <Dropdown.Toggle as={ThreeDots} />
      <Dropdown.Menu
        className="text-center"
        popperConfig={{ strategy: "fixed" }}>
        <Dropdown.Item
          className={styles.DropdownItem}
          onClick={handleEdit}
          aria-label="edit">
          <i className="fas fa-edit" />
        </Dropdown.Item>
        <Dropdown.Item className={styles.DropdownItem} onClick={handleDelete} aria-label="delete">
          <i className="fas fa-trash-alt" />
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export function ProfileEditDropdown({ id }) {
  const history = useHistory();
  const setCurrentUser = useSetCurrentUser();

  const handleDeleteAccount = async () => {
    try {
      await axiosReq.delete(`/api/profiles/user/delete/`);
      setCurrentUser(null);
      history.push("/");
    } catch (err) {
    }
  };



  return (
    <Dropdown className={`ml-auto px-3 ${styles.Absolute}`} drop="left">
      <Dropdown.Toggle as={ThreeDots} />
      <Dropdown.Menu>
        <Dropdown.Item
          onClick={() => history.push(`/profiles/${id}/edit`)}
          aria-label="edit-profile">
          <i className="fas fa-edit" /> Edit profile
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => history.push(`/profiles/${id}/edit/username`)}
          aria-label="edit-username">
          <i className="far fa-id-card" />
          Change username
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => history.push(`/profiles/${id}/edit/password`)}
          aria-label="edit-password">
          <i className="fas fa-key" />
          Change password
        </Dropdown.Item>

        <Dropdown.Item
          onClick={handleDeleteAccount}
          aria-label="delete-account">
          <i className="fas fa-user-slash" />
          Delete account
        </Dropdown.Item>

      </Dropdown.Menu>
    </Dropdown>
  );
}