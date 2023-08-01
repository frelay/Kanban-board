import "./UserMenu.scss";

export default function UserMenu() {
  return (
    // Просто компонент меню пользователя
    <div className="user-menu">
      <div className="user-menu__square"></div>
      <ul className="user-menu__links">
        <li className="user-menu__link">Profile</li>
        <li className="user-menu__link">Log out</li>
      </ul>
    </div>
  );
}
