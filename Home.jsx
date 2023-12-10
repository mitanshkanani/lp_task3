import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Home() {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://newsapi.org/v2/top-headlines?country=in&apiKey=d978847de10d4dc6b4dfc51294e1c876')
      .then((response) => {
        setNewsData(response.data.articles);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
       <nav>
        <div className="navbar">
          <h1>News</h1>
          <div className="auth-buttons">
            <button>Sign Up</button>
            <button>Sign In</button>
          </div>
        </div>
      </nav>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {newsData.map((item) => (
            <li key={item.id}>
              <ul>{item.title}</ul>
              <ul>{item.description}</ul>
              <ul><a href={item.url} onClick={(e) => {e.preventDefault(); window.open(item.url);}}>{item.url}</a></ul>
              <ul><a href="{item.urlToImage}">{item.urlToImage}</a></ul>
              <ul>{item.content}</ul>
              
              <hr />
              </li>
          ))}
        </ul>
      )}
    </div>
  );
}

