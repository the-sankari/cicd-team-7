import React from "react";

function About() {
  return (
    <div className="about">
      <h1>About Team 7</h1>
      <p>
        We are Team 7, consisting of three awesome developers learning
        Continuous Integration and AWS.
      </p>
      <p>Our team members are:</p>
      <ul className="team-members">
        <li>
          <a href="https://github.com/the-sankari/" target="blank">Kajol Sutra Dhar</a>
        </li>
        <li>
          <a href="https://github.com/benteodor" target="blank">Popa Teodor</a>
        </li>
        <li>
          <a href="https://github.com/Bimesh-1" target="blank">Bimesh Upreti</a>
        </li>
      </ul>
    </div>
  );
}

export default About;
