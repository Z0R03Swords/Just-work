import { useState, useEffect } from 'react';
import axios from 'axios';
import TileView from '../TileView/TileView';
import './GridAndTile.css';

export default function GridView() {
  const [data, setData] = useState([]);
  const [view, setView] = useState(localStorage.getItem('view') || 'grid');

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, []);

  const toggleView = () => {
    const newView = view === 'grid' ? 'tile' : 'grid';
    setView(newView);
    localStorage.setItem('view', newView);
  };

  return (
    <div>
      <button className='pushable' onClick={toggleView}>
        <span className="shadow"></span>
        <span className="edge"></span>
        <span className="front">View</span>
      </button>
      <div className={view === 'grid' ? 'grid-view' : 'tile-view'}>
        {view === 'grid' ? (
          <div className="grid">
            {data.map(item => (
              <div key={item.id} className="grid-item">
                {item.name}
              </div>
            ))}
          </div>
        ) : (
          <TileView data={data} />
        )}
      </div>
    </div>
  );
}
