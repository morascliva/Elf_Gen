// ElfNameGenerator.js
import React, { useState } from 'react';

const ElfNameGenerator = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [generatedName, setGeneratedName] = useState('');

  const generateElfName = () => {
    // Simple logic for generating an elf name
    const elfFirstName = firstName || 'Jingle';
    const elfLastName = lastName || 'Twinkletoes';

    const randomSuffixes = ['Sweet', 'Bells', 'Mistletoe', 'Candy', 'Gift','Snowball'];
    const randomSuffix = randomSuffixes[Math.floor(Math.random() * randomSuffixes.length)];
    
    const randomPrefixes = ['Merry', 'J', 'Wood', 'Grinch', 'Sparkle','Starlight'];
    const randomPrefix = randomPrefixes[Math.floor(Math.random() * randomPrefixes.length)];
    
    const name = `${randomPrefix} ${elfFirstName} ${elfLastName} ${randomSuffix}`;
    

    
    setGeneratedName(name);
  };

  return (
    <div>
      <h1>Elf Name Generator</h1>
      <break> </break>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <button onClick={generateElfName}>Generate Elf Name</button>
      {generatedName && (
        <div style={{ marginTop: '20px' }}>
          <strong>Your Elf Name:</strong> {generatedName}
        </div>
      )}
    </div>
  );
};

export default ElfNameGenerator;
