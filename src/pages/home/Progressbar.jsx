import React from "react";

const ProgressBar = (props) => {
  const { bgcolor, completed } = props;
  const containerStyles = {
    height: 5,
    width: '150px',
    backgroundColor: "#e0e0de",
    borderRadius: 10,
    margin: 50
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  const labelStyles = {
    padding: 3,
    color: 'white',
    fontWeight: 'bold'
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;