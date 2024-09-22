import React from 'react';
import { motion } from 'framer-motion';

const Tile = ({ title, info, isExpanded, onClick, position }) => {
  return (
    <motion.div
      onClick={onClick}
      initial={{ scale: 1 }}
      animate={{ scale: isExpanded ? 1.5 : 1 }}
      transition={{ type: 'spring', stiffness: 300 }}
      style={{
        position: 'absolute',
        width: 'calc(100% / 3 - 20px)',
        height: '200px',
        backgroundColor: 'lightblue',
        borderRadius: '10px',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        zIndex: isExpanded ? 10 : 1,
        ...position,
      }}
    >
      {isExpanded ? (
        <div>
          <h2>{title}</h2>
          <p>{info}</p>
        </div>
      ) : (
        <div>{title}</div>
      )}
    </motion.div>
  );
};

export default Tile;
