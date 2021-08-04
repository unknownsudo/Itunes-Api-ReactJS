
import React, { useEffect, useState } from 'react';
import './App.css';
import SearchBar from './Search';

function App() {

  const [searchWord, setSearchWord] = useState('eminem');
  const [Artist, setArtist] = useState(null);
  const [view, setView] = useState((<div>no data received</div>));

  useEffect(() => {
    fetch(`https://itunes.apple.com/search?term=${searchWord}`)
      .then((response) => response.json())
      .then(data => {
        console.log(data)
        const mapi = data.results.map(track => {
          return {
            artistName: track.artistName,
            trackName: track.trackName,
            collectionName: track.collectionName,
            link: track.collectionViewUrl
          }
        });
        setArtist(mapi);
      });

  }, [searchWord]);

  useEffect(() => {
    if (!!Artist) {
      const temp = Artist.map(track => (
        <ul>
          <li className="artist-name">{track.artistName}</li>
          <li className="music-name">{track.trackName}</li>
          <li className="album-name">{track.collectionName}</li>
          <a href={"link"} target="_blank"> <li className="linki">Link</li> </a>
        </ul>
      ));
      setView(temp);
    }
  }, [Artist])

  return (
    <div>
      <SearchBar searchh={(word) => { setSearchWord(word) }} />
      {view}
    </div>
  );
}

export default App;
