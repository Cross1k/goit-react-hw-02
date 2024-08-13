import css from "./Profile.module.css";

export default function Profile({ avatar, tag, username, location, stats }) {
  return (
    <div className={css.profileCard}>
      <div className={css.userInfo}>
        <img className={css.img} src={avatar} alt={tag} />
        <p className={css.title}>{username}</p>
        <p className={css.text}>@{tag}</p>
        <p className={css.text}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.listItem}>
          <span>Followers</span>
          <span className={css.countItem}>{stats.followers}</span>
        </li>
        <li className={css.listItem}>
          <span>Views</span>
          <span className={css.countItem}>{stats.views}</span>
        </li>
        <li className={css.listItem}>
          <span>Likes</span>
          <span className={css.countItem}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
