import React from 'react';
import { TreeParams } from '../types';

interface Props {
  params: TreeParams;
  setParams: (p: TreeParams) => void;
  running: boolean;
  setRunning: (b: boolean) => void;
  onReset: () => void;
}

const ControlPanel: React.FC<Props> = ({ params, setParams, running, setRunning, onReset }) => {
  const updateParam = (key: keyof TreeParams, value: number | string) => {
    setParams({ ...params, [key]: value });
  };

  return (
    <div style={{ padding: '1rem' }}>
      {Object.entries(params).map(([key, val]) => (
        <div key={key}>
          <label>{key}</label>
          <input
            type={typeof val === 'number' ? 'number' : 'text'}
            value={val}
            onChange={(e) => updateParam(key as keyof TreeParams, typeof val === 'number' ? +e.target.value : e.target.value)}
          />
        </div>
      ))}
      <button onClick={() => setRunning(!running)}>{running ? 'Pause' : 'Start'}</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default ControlPanel;