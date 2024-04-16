import React from 'react';

const SponsorComponent = () => {
  const sponsors = [
    { id: 1, name: 'Sponsor 1', logo: 'logo1.png' },
    { id: 2, name: 'Sponsor 2', logo: 'logo2.png' },
    { id: 3, name: 'Sponsor 3', logo: 'logo3.png' },
    // add more sponsors as needed
  ];

  return (
    <div>
      <h2>Our Sponsors</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {sponsors.map((sponsor) => (
          <div key={sponsor.id}>
            <img src={sponsor.logo} alt={sponsor.name} />
            <p>{sponsor.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SponsorComponent;