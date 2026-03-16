import React, { useState, useEffect } from 'react';
import '../styles/TrafficLight.css';

type LightColor = 'red' | 'yellow' | 'green';

interface LightConfig {
  duration: number;
  next: LightColor;
}

const LIGHT_CONFIG: Record<LightColor, LightConfig> = {
  red: { duration: 2000, next: 'green' },
  yellow: { duration: 1000, next: 'red' },
  green: { duration: 5000, next: 'yellow' },
};

const TrafficLight: React.FC = () => {
  const [activeColor, setActiveColor] = useState<LightColor>('red');

  useEffect(() => {
    const { duration, next } = LIGHT_CONFIG[activeColor];

    const timer = setTimeout(() => {
      setActiveColor(next);
    }, duration);

    return () => clearTimeout(timer);
  }, [activeColor]);

  return (
    <div className="traffic-light-container">
      {(Object.keys(LIGHT_CONFIG) as LightColor[]).map((color) => (
        <div
          key={color}
          className={`light ${color} ${activeColor === color ? 'active' : ''}`}
          aria-label={`${color} light`}
        />
      ))}
    </div>
  );
};

export default TrafficLight;