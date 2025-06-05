import profilePic from "./assets/profile.jpg";

function Card() {
  return (
    <div className="card">
      <img className="card-image" src={profilePic} alt="Profile picture" />
      <h2>Sadia</h2>
      <p>Software Engineer</p>
    </div>
  );
}

export default Card;
