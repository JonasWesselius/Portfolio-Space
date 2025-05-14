import './star.css';

const STAR_COUNT = 200;
const MIN_SIZE = 0.5;
const MAX_SIZE = 4;
const MIN_DURATION = 12;
const MAX_DURATION = 28;

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

const stars = Array.from({ length: STAR_COUNT }).map((_, i) => {
  const size = randomBetween(MIN_SIZE, MAX_SIZE);
  const left = randomBetween(0, 100); // percent
  const delay = randomBetween(0, MAX_DURATION);
  const duration = randomBetween(MIN_DURATION, MAX_DURATION);
  const opacity = randomBetween(0.5, 1);
  return (
    <div
      key={i}
      className="star"
      style={{
        left: `${left}%`,
        width: `${size}px`,
        height: `${size}px`,
        opacity,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        bottom: `-5vh`,
        boxShadow: `0 0 ${1 * size}px ${0.25 * size}px #fff, 0 0 ${2 * size}px ${0.5 * size}px #fff2`,
      }}
    />
  );
});

export default function StarryBackground() {
  return (
    <div className="stars-container">
      {stars}
    </div>
  );
} 