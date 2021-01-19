import "./About.css";

export const About = (props) => {
  console.log(props);
  return (
    <div className="container-about">
      <span className="about">
        About this page: I built it because I love movies.
      </span>
    </div>
  );
};
