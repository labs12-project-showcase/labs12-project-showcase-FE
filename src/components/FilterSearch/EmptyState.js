import React from 'react';

const EmptyState = ({ queryString }) => {
  let queryDescription = '';
  if (queryString.includes('&search')) {
    queryDescription = 'search terms';
  }
  if (
    queryString.includes('&lat' || !queryString.includes('?tracks=none')) ||
    queryString.includes('badge')
  ) {
    if (queryDescription.length) {
      queryDescription = queryDescription.concat([' and filters']);
    } else {
      queryDescription = 'filter settings';
    }
  }
  // console.log('test', queryDescription, queryString.includes('&lat'));
  return (
    <div className="cards-display">
      <h2>Matching Candidates</h2>
      <div className="empty-state">
        We found no results to match your {queryDescription || 'query'}.
      </div>
    </div>
  );
};

export default EmptyState;
