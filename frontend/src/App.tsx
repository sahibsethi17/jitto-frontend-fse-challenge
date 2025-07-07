import React, { useState } from 'react';
import ControlPanel from './components/ControlPanel';
import TreeRenderer from './components/TreeRenderer';
import { TreeParams } from './types';

const defaultParams: TreeParams = {
  branchesPerLevel: 2,
  initialLength: 100,
  branchAngle: 30,
  branchWidth: 10,
  scaleFactor: 0.7,
  leafSize: 6,
  leafColor: '#00ff00',
  frameRate: 30
};

const App: React.FC = () => {
  const [params, setParams] = useState<TreeParams>(defaultParams);
  const [running, setRunning] = useState<boolean>(false);
  const [resetKey, setResetKey] = useState<number>(0); // force rerender

  const handleReset = () => {
    setResetKey(prev => prev + 1);
    setRunning(false);
  };

  return (
    <div>
      <ControlPanel params={params} setParams={setParams} running={running} setRunning={setRunning} onReset={handleReset} />
      <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
        <TreeRenderer key={resetKey} params={params} running={running} />
      </div>
    </div>
  );
};

export default App;