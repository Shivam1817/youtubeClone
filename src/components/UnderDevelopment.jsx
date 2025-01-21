// src/components/UnderDevelopment.jsx
import React from 'react';
import ConstructionIcon from '@mui/icons-material/Construction';

function UnderDevelopment({ pageName }) {
  return (
    <div className="underDevelopment">
      <ConstructionIcon className="underDevelopment__icon" />
      <h2>{pageName} Page</h2>
      <p>This page is currently under development.</p>
      <p>Please check back later!</p>
    </div>
  );
}

export default UnderDevelopment;