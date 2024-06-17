// src/components/TranscriptionDisplay.js
import React from 'react';
import './TranscriptionDisplay.css';

const TranscriptionDisplay = ({ transcriptions }) => {
  return (

    <div className="transcription-display-container">
      <h2 className="transcription-display-title">Transcription Display</h2>
      <ul className="transcription-display-list">
        {transcriptions.map((transcription, index) => (
          <li key={index} className="transcription-display-item">{transcription}</li>
        ))}
      </ul>
    </div>
  );
};

export default TranscriptionDisplay;
