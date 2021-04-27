import { Component } from 'react';
import styles from '../Form/Form.module.css';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };
  handleInputChenge = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addContact({ ...this.state });
    this.reset();
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className={styles.Form} onSubmit={this.handleSubmit}>
        <label className={styles.FormLabel}>
          Name
          <input
            className={styles.FormInput}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChenge}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label className={styles.FormLabel}>
          Number
          <input
            className={styles.FormInput}
            type="text"
            name="number"
            value={this.state.number}
            onChange={this.handleInputChenge}
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
            required
          />
        </label>

        <button className={styles.FormBtn} type="submit">
          {' '}
          Add Contact ✅{' '}
        </button>
      </form>
    );
  }
}

export default Form;
