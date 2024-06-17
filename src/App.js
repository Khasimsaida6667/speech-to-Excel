// src/App.js
import React, { useState } from 'react';
import AudioRecorder from './AudioRecorder';
import TranscriptionDisplay from './TranscriptionDisplay';
import FileManagement from './FileManagement';
import "./App.css";

const App = () => {
  const [transcriptions, setTranscriptions] = useState([]);

  const handleTranscriptionUpdate = (newTranscription) => {
    setTranscriptions(() => [newTranscription]);
  };

  return (


    <div className="app-container">
      <h1 className="app-title">Speech to Text Converter</h1>
      <div className="app-content">
        <AudioRecorder onTranscriptionUpdate={handleTranscriptionUpdate} />
        <TranscriptionDisplay transcriptions={transcriptions} />
        <FileManagement transcriptions={transcriptions} />
      </div>
    </div>

  );
};

export default App;
