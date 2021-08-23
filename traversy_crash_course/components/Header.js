import headerStyles from "../styles/Header.module.css";
const Header = () => {
  return (
    <div>
      <h1 className="title">
        <span>WebDev</span> News
      </h1>
      <p className={headerStyles.description}>Keep up to date with the latest web dev news</p>
      {/* Styling within JSX
      <style jsx>
        {`
          .title {
            color: red;
          } 
        `}
      </style> */}
    </div>
  );
};

export default Header;
