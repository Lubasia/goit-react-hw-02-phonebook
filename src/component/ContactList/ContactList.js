import styles from '../ContactList/ContactList.module.css';

const ContactList = ({ contact, onDeleteContact }) => (
  <ul className={styles.ContactList}>
    {contact.map(({ id, name, number }) => (
      <li className={styles.ContactListItem} key={id}>
        <span>{name} :</span>
        <span> {number} </span>
        <button
          className={styles.ContactListBtn}
          type="button"
          onClick={() => onDeleteContact(id)}
        >
          {' '}
          Del 🗑
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;
