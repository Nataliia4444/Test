// //* IMPORT STYLES
import css from "./ContactForm.module.css";

// //* IMPORT LIBRARY PHONE NUMBER INPUT
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { isValidPhoneNumber } from "react-phone-number-input";

// //* IMPORT LIBRARY FORMIK
import { Formik, Field, Form, ErrorMessage } from "formik";

// //* INITIAL VALUES FOR FORMIK
const initialValues = { username: "", email: "", number: "" };

// //* IMPORT LIBRARY FOR VALIDATION FORM
import * as Yup from "yup";

// *IMPORT USESTATE
import { useState } from "react";

//* VALIDATION SCHEME WITH YUP
const FeedbackSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Коротке ім'я")
    .max(50, "Довге ім'я")
    .required("Обов'язкове поле"),
  email: Yup.string()
    .email("Недійсна електронна адреса")
    .required("Обов'язкове поле"),
  number: Yup.string()
    .required("Обов'язкове поле")
    .test("valid-number", "Недійсний номер телефону", (value) =>
      isValidPhoneNumber(value)
    ),
});

export default function ContactForm({ onSubmit }) {
  const [value, setValue] = useState();

  const handleSubmit = (data, formActions) => {
    console.log(data, "data");
    onSubmit(data);
    formActions.resetForm();
    //* RESET THE PHONEINPUT VALUE
    setValue("");
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      {({ setFieldValue }) => (
        <div className={css.formSection}>
          <Form className={css.form}>
            <p className={css.fromTheme}>
              Запишитесь <span className={css.formText}>бесплатно</span> и
              получите подарок{" "}
            </p>
            <div className={css.formInputWrapper}>
              <Field
                type="text"
                placeholder="Ваше имя и фамилия"
                className={css.formInput}
                name="username"
                autoComplete="off"
              />
              <ErrorMessage name="username" component="p" />
            </div>
            <div className={css.formInputNumberWrapper}>
              <PhoneInput
                placeholder="Ваш номер телефона"
                value={value}
                onChange={(value) => {
                  setValue(value);
                  setFieldValue("number", value);
                }}
                defaultCountry="UA"
                className={css.formNumber}
              />
              <ErrorMessage name="number" component="p" />
            </div>
            <div className={css.formInputWrapper}>
              <Field
                type="email"
                placeholder="Ваш email"
                className={css.formInput}
                name="email"
                autoComplete="off"
              />
              <ErrorMessage name="email" component="p" />
            </div>
            <button className={css.formBtn} type="submit" name="submit">
              Записаться бесплатно
            </button>
            <p className={css.formReconciliation}>
              Нажимая на кнопку я соглашаюсь{" "}
              <span className={css.formAgree}>
                с политикой конфиденциальности
              </span>
            </p>
          </Form>
        </div>
      )}
    </Formik>
  );
}
