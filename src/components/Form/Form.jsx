import style from './Form.module.css';
import { FiSearch } from 'react-icons/fi';

const Form = ({ onFormSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();
    onFormSubmit(event.target.elements.search.value);
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </form>
  );
};

export default Form;
