import "./App.css";
import { info, links, linksList } from "./info";

function App() {
  return (
    <div class="container">
      <div class="circle-shape">
        <a href={links.twitter} target="_blank" rel="noopener noreferrer">
          <img src={links.pfp} alt={`${info.name}'s pfp`} class="profile-pic" />
        </a>
      </div>
      <div className="info-div">
        <p className="info-div-title">{info.name}</p>
        <p>
          <span className="light">
            {info.ethAddress} • {info.lensAddress}
          </span>
        </p>
        <p className="">
          {info.title} at
          <a href={links.companyLink} target="_blank" rel="noopener noreferrer">
            {` ${info.company}`}
          </a>
        </p>
      </div>

      <div class="link-list">
        {linksList.map(({ link, name }) => (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <div class="link-list-item dark">{name}</div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default App;
