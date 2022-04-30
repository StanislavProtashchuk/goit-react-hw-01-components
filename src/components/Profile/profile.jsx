import PropTypes from 'prop-types';

export default function Profile({ avatar, name, tag, location, stats }) {

    const { followers, views, likes} = stats;

    return <div class="profile">
        <div class="description">
            <img
                src={avatar}
                alt="User avatar"
                class="avatar"
            />
            <p class="name">{name}</p>
            <p class="tag">@{tag}</p>
            <p class="location">{location}</p>
        </div>

        <ul class="stats">
            <li>
                <span class="label">Followers</span>
                <span class="quantity">{ followers }</span>
            </li>
            <li>
                <span class="label">Views</span>
                <span class="quantity">{ views }</span>
            </li>
            <li>
                <span class="label">Likes</span>
                <span class="quantity">{ likes }</span>
            </li>
        </ul>
    </div>;
} 

Profile.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    })
}