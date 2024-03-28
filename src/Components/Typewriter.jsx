import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../styles/typewriter.css'

const Typewriter = ({ sentences, speed }) => {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isErasing, setIsErasing] = useState(false);

  useEffect(() => {
    const currentSentence = sentences[currentSentenceIndex];

    const typingInterval = setInterval(() => {
      setDisplayText((prevText) => {
        if (isErasing) {
          // Erasing
          const newText = prevText.slice(0, -1);
          setCurrentCharIndex((prevIndex) => Math.max(0, prevIndex - 1));

          if (newText === '') {
            setIsErasing(false);
            setCurrentSentenceIndex((prevIndex) =>
              (prevIndex + 1) % sentences.length
            );
          }

          return newText;
        }

        // Typing
        if (currentCharIndex === currentSentence.length) {
          setIsErasing(true);
          clearInterval(typingInterval);
          return prevText;
        }

        const nextChar = currentSentence.charAt(currentCharIndex);
        setCurrentCharIndex((prevIndex) => prevIndex + 1);

        return prevText + nextChar;
      });
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [sentences, currentSentenceIndex, currentCharIndex, speed, isErasing]);

  useEffect(() => {
    // Reset when the current sentence changes
    setDisplayText('');
    setCurrentCharIndex(0);
    setIsErasing(false);
  }, [currentSentenceIndex, sentences]);

  return (
    <div className='typewriter-comp transparent-bg'>
      <span className='text-color-1 transparent-bg'>{displayText}</span>
      <span className="text-color-2 transparent-bg cursor">&#124;</span>
    </div>
  );
};

Typewriter.propTypes = {
  sentences: PropTypes.arrayOf(PropTypes.string).isRequired,
  speed: PropTypes.number.isRequired,
};

export default Typewriter;
