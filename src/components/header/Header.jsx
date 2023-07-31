import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Awesome Kanban Board</h1>
      <div className="header__user-avatar">
        <div className="header__avatar-frame"></div>
      </div>
      <div className="header__user-menu">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="header__arrow-down"
        >
          <g clip-path="url(#clip0_2_9)">
            <path
              d="M7.415 8.20999L12 12.795L16.585 8.20999L18 9.62499L12 15.625L6 9.62499L7.415 8.20999Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_2_9">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </header>
  );
}
