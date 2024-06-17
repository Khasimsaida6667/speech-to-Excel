import React, { useState } from 'react';
import './AudioRecorder.css';

const AudioRecorder = ({ onTranscriptionUpdate }) => {
  
  const [recognition, setRecognition] = useState(null); // Initialize recognition state

  const handleStartRecording = () => {
    const recognitionInstance = new window.webkitSpeechRecognition();
    recognitionInstance.continuous = true;
    recognitionInstance.interimResults = true;

    recognitionInstance.onresult = (event) => {
      const interimTranscript = Array.from(event.results)
        .map((result) => result[0].transcript)
        .join('');
      
      onTranscriptionUpdate(interimTranscript);
    };

    setRecognition(recognitionInstance); // Set recognition state
    recognitionInstance.start();
  };

  const handleStopRecording = () => {
    if (recognition && typeof recognition.stop === 'function') {
      recognition.stop(); // Stop recognition if recognition instance exists
    } else {
      console.error('Recognition instance not available or stop method not supported');
    }
  };

  return (
    <div className="audio-recorder-container">
      <h2 className="audio-recorder-title">Audio Recorder</h2>
      <button className="audio-recorder-button" onClick={handleStartRecording}>Start Recording</button>
      <button className="audio-recorder-button" onClick={handleStopRecording}>Stop Recording</button>
      
    </div>
  );
};

export default AudioRecorder;

