import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__task-wrapper">
        <div className="footer__active-tasks">Active tasks:N</div>
        <div className="footer__finished-tasks">Finished tasks:N</div>
      </div>
      <div className="footer__developer">
        Kanban board by Pavel Makarov, 2023
      </div>
    </footer>
  );
}
