import { useState, useEffect } from 'react';
import './TileView.css';

export default function TileView({ data }) {
  const [selectedTile, setSelectedTile] = useState(null);

  // Retrieve the selected tile from local storage on component mount
  useEffect(() => {
    const savedTile = localStorage.getItem('selectedTile');
    if (savedTile) {
      setSelectedTile(JSON.parse(savedTile));
    }
  }, []);

  // Save the selected tile to local storage whenever it changes
  useEffect(() => {
    if (selectedTile) {
      localStorage.setItem('selectedTile', JSON.stringify(selectedTile));
    } else {
      localStorage.removeItem('selectedTile');
    }
  }, [selectedTile]);

  const handleTileClick = (item) => {
    setSelectedTile(item);
  };

  const closeDetailView = () => {
    setSelectedTile(null);
  };

  return (
    <div>
      {selectedTile ? (
        <div className="detail-view">
          <h3>{selectedTile.name}</h3>
          <p>Email: {selectedTile.email}</p>
          <p>Phone: {selectedTile.phone}</p>
          <button className='pushable' onClick={closeDetailView}>
            <span className="shadow"></span>
            <span className="edge"></span>
            <span className="front">Back to Tiles</span>
          </button>
        </div>
      ) : (
        <div className="tiles">
          {data.map(item => (
            <div key={item.id} className="tile" onClick={() => handleTileClick(item)}>
              <h3>{item.name}</h3>
              <button>Edit</button>
              <button>Flag</button>
              <button>Delete</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
