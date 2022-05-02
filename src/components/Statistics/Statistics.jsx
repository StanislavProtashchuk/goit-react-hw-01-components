import PropTypes from 'prop-types';
import s from './Statistics.module.css'

export default function Statistics({ title, stats }) {
    return (
        <section className={s.statistics}>
            {title && <h2 className={s.title}>{title}</h2>}

            <ul className={s.statList}>
                {stats.map(({ id, label, percentage }) => {
                    return (
                        <li className={s.item} style={{backgroundColor: getRandomHexColor()}} key={id}>                            
                            <span className={s.label}>{label}</span>
                            <span className={s.percentage}>{percentage}%</span>
                        </li>);
                })}
        </ul>
        </section>
    );
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    )
}
