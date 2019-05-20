import React from 'react';

const NoMatch = props => {
  return (
    <div className="no-match">
      <h1>Aw, Shucks</h1>
      <p>
        <span className="strong">404</span> —{' '}
        <code className="bad-route">{props.location.pathname}</code>
      </p>
      <p>
        Hire Lambda can help you find your team's next developer, but we can't
        find the page you're looking for.
      </p>
    </div>
  );
};

export default NoMatch;
