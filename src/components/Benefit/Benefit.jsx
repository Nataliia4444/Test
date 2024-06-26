import css from "./Benefit.module.css";

export default function Benefit() {
  return (
    <div className={css.benefitsSection}>
      <ul className={css.benefitsList}>
        <li className={css.benefitPresent}>
          <img
            className={css.presentImageDesk}
            src="/src/Image/Benefit/desktPresent.png"
            srcSet="/src/Image/Benefit/desktPresent.png 1x, /src/Image/Benefit/desktPresent@2x.png 2x"
            width={37.81}
            height={37.81}
            alt="Бонус за регистрацию"
            loading="lazy"
          />
          <img
            className={css.presentImageMob}
            src="/src/Image/Benefit/mobilePresent.png"
            srcSet="/src/Image/Benefit/mobilePresent.png 1x, /src/Image/Benefit/mobilePresent@2x.png 2x"
            width={45.81}
            height={45.81}
            alt="Бонус за регистрацию"
            loading="lazy"
          />
          <div className={css.benefitsContainer}>
            <h3 className={css.benefitsTitle}>Бонус за регистрацию</h3>
            <p className={css.benefitsText}>
              PDF-файл &ldquo;5 преимуществ профессии веб-дизайнера&rdquo;
            </p>
          </div>
        </li>
        <li className={css.benefitTeacher}>
          <img
            className={css.teacherImage}
            src="/src/Image/Benefit/teacher.png"
            srcSet="/src/Image/Benefit/teacher.png 1x, /src/Image/Benefit/teacher@2x.png 2x"
            // src="/src/Image/Benefit/teacher.png"
            width={51}
            height={49.27}
            alt="Кирилл КАСАТОНОВ"
            loading="lazy"
          />
          <div className={css.benefitsContainer}>
            <h3 className={css.teacherName}>
              Кирилл <span className={css.teacherLastName}>КАСАТОНОВ</span>
            </h3>
            <p className={css.teacherExperience}>
              6 лет коммерческого опыта с такими компаниями как Mercedes-Benz и
              другими крупными корпорациями
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}
