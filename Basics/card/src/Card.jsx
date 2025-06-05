import profilePic from "./assets/profile.jpg";

function Card() {
  return (
    <div className="card">
      <img className="card-image" src={profilePic} alt="Profile picture" />
      <h2 className="card-title">Sadia</h2>
      <p className="card-text">Software Engineer and a learner</p>
    </div>
  );
}

export default Card;
