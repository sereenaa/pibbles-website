'use client'; 
import { useEffect, useState } from 'react';

function DashboardPreview() {
  const [screenshotUrl, setScreenshotUrl] = useState('');

  useEffect(() => {
    // Update the URL to force a new screenshot on each render
    setScreenshotUrl('/api/screenshot' + new Date().getTime());
  }, []);

  return <img src={screenshotUrl} alt="Dashboard Preview" />;
}

export default DashboardPreview;
