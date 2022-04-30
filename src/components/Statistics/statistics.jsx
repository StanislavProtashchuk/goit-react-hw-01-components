import PropTypes from 'prop-types';

export default function Statistics({ title, stats }) {
    return (
        <section class="statistics">
            <h2 class="title">{title}</h2>

            <ul class="stat-list">
                {stats.map(({ id, label, percentage }) => {
                    return (
                        <li class="item" key={id}>                            
                            <span class="label">{label}</span>
                            <span class="percentage">{percentage}%</span>
                        </li>);
                })}
        </ul>
        </section>
    );
};

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    )
}