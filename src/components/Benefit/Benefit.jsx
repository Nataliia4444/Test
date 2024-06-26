import css from "./Benefit.module.css";

export default function Benefit() {
  return (
    <div className={css.benefitsSection}>
      <ul className={css.benefitsList}>
        <li className={css.benefitPresent}>
          <img
            className={css.presentImageDesk}
            src="/public/Benefit/desktPresent.png"
            srcSet="/public/Benefit/desktPresent.png 1x, /public/Benefit/desktPresent@2x.png 2x"
            width={37.81}
            height={37.81}
            alt="Бонус за регистрацию"
            loading="lazy"
          />
          <img
            className={css.presentImageMob}
            src="/public/Benefit/mobilePresent.png"
            srcSet="/public/Benefit/mobilePresent.png 1x, /public/Benefit/mobilePresent@2x.png 2x"
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
            src="/public/Benefit/teacher.png"
            srcSet="/public/Benefit/teacher.png 1x, /public/Benefit/teacher@2x.png 2x"
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
