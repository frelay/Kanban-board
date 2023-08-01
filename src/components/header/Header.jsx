import { useState } from "react";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import UserAvatar from "../util-components/UserAvatar";
import UserMenu from "./UserMenu";
import "./Header.scss";

export default function Header() {
  // Состояние для меню пользователя (Невидимый/Видимый)
  const [unvisible, setVisible] = useState(false);

  return (
    // Рисуем header
    <header className="header">
      <h1 className="header__title">Awesome Kanban Board</h1>
      <div className="header__user">
        <div className="header__user-avatar">
          <div className="header__avatar-frame">
            <UserAvatar />
          </div>
        </div>
        <div
          className="header__user-menu"
          // По клику на стрелочку меняем состояние с невидимого на видимый
          onClick={() => (unvisible ? setVisible(false) : setVisible(true))}
        >
          {/* В зависимости от видимости меню рисуем разные стрелочки */}
          {!unvisible ? (
            <RiArrowDownSLine className="header__arrow-down" />
          ) : (
            <RiArrowUpSLine className="header__arrow-up" />
          )}
        </div>
      </div>
      {/* В зависимости от состояния рисуем или нет меню пользователя */}
      {unvisible && <UserMenu />}
    </header>
  );
}
