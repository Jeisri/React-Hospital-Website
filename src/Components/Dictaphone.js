import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Dictaphone = () => {
  const {
    transcript,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div>
      <button className="button" onClick={SpeechRecognition.startListening}>Start</button>
      <button className="button" onClick={resetTranscript}>Submit</button>
      <p>{transcript}</p>
    </div>
  );
};
export default Dictaphone;