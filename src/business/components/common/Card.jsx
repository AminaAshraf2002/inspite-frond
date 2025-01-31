import React from 'react';
import './Card.css';

const Card = ({ 
  children, 
  title, 
  className = '', 
  headerActions,
  footer 
}) => {
  return (
    <div className={`custom-card ${className}`}>
      {title && (
        <div className="card-header">
          <h3 className="card-title">{title}</h3>
          {headerActions && (
            <div className="card-header-actions">
              {headerActions}
            </div>
          )}
        </div>
      )}
      
      <div className="card-body">
        {children}
      </div>
      
      {footer && (
        <div className="card-footer">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;