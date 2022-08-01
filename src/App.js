import "./App.css";

function App() {
  const info = {
    name: "Steph Orpilla",
    ethAddress: "oceans404.eth",
    lensAddress: "stepho.lens",
  };
  const links = {
    pfp: "https://ca.slack-edge.com/T8VPLGV4Z-U03HLD90VQC-9264ef1ef9df-512",
    twitter: "https://twitter.com/0ceans404",
    instagram: "https://www.instagram.com/_steph.js/",
    lensprotocol: "https://www.lensfrens.xyz/stepho.lens",
    telegram: "https://t.me/oceans404",
    companyLink: "https://polygon.technology/",
    polygonForm:
      "https://docs.google.com/forms/d/e/1FAIpQLSfelhpuF-CLbq943b2FgkibJUmTauKoi3S-CNN7_pz-9xIGcA/viewform",
    polygonDeveloperLibrary: "http://bit.ly/polygon-library",
    poap: "https://app.poap.xyz/scan/oceans404.eth",
  };

  const linksList = [
    {
      name: "Twitter",
      link: links.twitter,
    },
    {
      name: "Telegram",
      link: links.telegram,
    },
    {
      name: "Lens Frens",
      link: links.lensprotocol,
    },
    {
      name: "Instagram",
      link: links.instagram,
    },
    {
      name: "My POAPs",
      link: links.poap,
    },
    {
      name: "Polygon Dev Resources",
      link: links.polygonDeveloperLibrary,
    },
  ];
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
          Developer Relations at
          <a href={links.companyLink} target="_blank" rel="noopener noreferrer">
            {` Polygon`}
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
