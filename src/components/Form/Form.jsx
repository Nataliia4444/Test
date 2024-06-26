import css from "./Form.module.css";
export default function Form() {
  return (
    <div className={css.formSection}>
      <form className={css.form}>
        <p className={css.fromTheme}>
          Запишитесь <span className={css.formText}>бесплатно</span> и получите
          подарок{" "}
        </p>
        <input
          type="text"
          placeholder="Ваше имя и фамилия"
          className={css.formInput}
        />
        <input
          type="text"
          placeholder="Ваш номер телефона"
          className={css.formInput}
        />
        <input type="text" placeholder="Ваш email" className={css.formInput} />

        <button className={css.formBtn}>Записаться бесплатно</button>
        <p className={css.formReconciliation}>
          Нажимая на кнопку я согашаюсь{" "}
          <span className={css.formAgree}>с политикой конфидециальности</span>
        </p>
      </form>
    </div>
  );
}
