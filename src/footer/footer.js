import React from 'react';
import "./footer.css";
const footer = () => {
    return (
          <div className="row">
            <p className="col-sm">
              &copy;{new Date().getFullYear()} Simpson Quotes by Juan de Lellis | Paisanos.io |
              Terms Of Service | Privacy
            </p>
          </div>
    )
}

export default footer;
