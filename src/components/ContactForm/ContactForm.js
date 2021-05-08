import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactForm.module.css";

class ContactForm extends React.Component {
  static propTypes = {
    addFunc: PropTypes.func.isRequired
  };

  state = {
    name: "",
    number: ""
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  addCon = e => {
    e.preventDefault();
    this.props.addFunc(this.state);
  };

  render() {
    return (
      <form onSubmit={this.addCon} className={styles.contactForm}>
        <p>Name</p>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={this.handleChange}
        />
        <p>Number</p>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={this.handleChange}
        />
        <button type="submit">Добавить</button>
      </form>
    );
  }
}

export default ContactForm;
