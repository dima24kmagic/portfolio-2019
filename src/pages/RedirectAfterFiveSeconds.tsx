import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

const RedirectAfterFiveSeconds = () => {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setRedirect(true);
    }, 3800);
  }, []);

  if (redirect) return <Redirect to="/" />;
  return <div>There's nothing in this path, will redirect back home in a second</div>;
};

export default RedirectAfterFiveSeconds;