import React from 'react';
import PropTypes from 'prop-types';

function PropsComponent(props) {
  return <div>{props.name}</div>;
}

PropsComponent.defaultProps = {
  name: 'Jimmy',
  age: 7,
};

PropsComponent.proTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
};

export default function Component() {
  return (
    <div>
      <PropsComponent />
    </div>
  );
}
