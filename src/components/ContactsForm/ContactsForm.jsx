import { Component } from "react";
import css from "./ContactsForm.module.css"
import PropTypes from 'prop-types';
import { nanoid } from "nanoid";

export class ContactsForm extends Component {
    state = {
        name: '',
        number: '',
      };

      handleChangeForm=(e)=>{
        const{name, value} = e.currentTarget; 
        this.setState({
            [name]: value,
        })
      };

      handleSubmitForm=(e)=>{
        e.preventDefault()
        this.props.onSubmit({
            name:this.state.name,
            number:this.state.number,
            id:nanoid()
        });
        
        this.resetForm();
      }

      resetForm =()=>{
        this.setState({name:"", number:""})
      }

    render() {
        return(
          <form className={css.contactsForm} onSubmit={this.handleSubmitForm}>
                <label> Name
                <input
      type="text"
      name="name"
      pattern="^[a-zA-Zа-яА-Я]+([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*$"
      required
      onChange={this.handleChangeForm}
      value={this.state.name}
    />
                </label>
                <label> Number
                <input
      type="tel"
      name="number"
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      required
      onChange={this.handleChangeForm}
      value={this.state.number}
    />
                </label>
                <button type="submit">Add contact</button>
            </form>
        )
    }
};

ContactsForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
