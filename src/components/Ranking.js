import React from 'react';
import PropTypes from 'prop-types';

function Ranking({ categoryId }) {
  return (
    <div>
      <h2>Rankingコンポーネント</h2>
      <p>カテゴリーID: {categoryId}</p>
    </div>
  );
}

Ranking.propTypes = {
  categoryId: PropTypes.string
};
Ranking.defaultProps = {
  categoryId: '1'
};

export default Ranking;
