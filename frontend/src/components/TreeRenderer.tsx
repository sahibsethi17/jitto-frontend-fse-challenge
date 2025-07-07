import React, { useEffect, useRef } from 'react';
import { TreeParams } from '../types';

interface Props {
  params: TreeParams;
  running: boolean;
}

const TreeRenderer: React.FC<Props> = ({ params, running }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    if (!running) return;

    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = '';

    const thresholdExceeded =
      params.initialLength > 50 ||
      params.branchWidth > 50 ||
      params.leafSize > 50 ||
      params.branchAngle > 50;

    const delay = 1000 / params.frameRate;

    const drawBranch = (
      parent: HTMLElement,
      length: number,
      width: number,
      angle: number,
      level: number
    ) => {
      if (length < 2) return;

      const branch = document.createElement('div');
      branch.style.position = 'absolute';
      branch.style.width = `${width}px`;
      branch.style.height = `${length}px`;
      branch.style.background = 'brown';
      branch.style.transformOrigin = 'bottom center';
      branch.style.transform = `rotate(${angle}deg)`;
      branch.style.bottom = '0';
      branch.style.left = '50%';
      branch.style.marginLeft = `-${width / 2}px`;

      parent.appendChild(branch);

      if (level === 0) {
        for (let i = 0; i < 3; i++) {
          const leaf = document.createElement('div');
          leaf.style.width = `${params.leafSize}px`;
          leaf.style.height = `${params.leafSize}px`;
          leaf.style.background = params.leafColor;
          leaf.style.borderRadius = '50%';
          leaf.style.position = 'absolute';
          leaf.style.bottom = `${Math.random() * length}px`;
          leaf.style.left = `${Math.random() * width}px`;
          branch.appendChild(leaf);
        }
      }

      setTimeout(() => {
        for (let i = 0; i < params.branchesPerLevel; i++) {
          const newAngle = angle + params.branchAngle * (i - (params.branchesPerLevel - 1) / 2);
          drawBranch(branch, length * params.scaleFactor, width * 0.7, newAngle, level - 1);
        }
      }, delay);
    };

    if (thresholdExceeded) {
      drawBranch(container, params.initialLength, params.branchWidth, 0, 6);
    } else {
      drawBranch(container, params.initialLength, params.branchWidth, 0, 6);
    }

    return () => cancelAnimationFrame(animationRef.current);
  }, [params, running]);

  return <div ref={containerRef} style={{ position: 'relative', width: '100%', height: '100%' }} />;
};

export default TreeRenderer;