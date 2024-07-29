import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import RetreatList from '../components/RetreatList';
import Filter from '../components/Filter';

const Home = () => {
  const [filter, setFilter] = useState({
    title: '',
    location: '',
    type: '',
    date: '',
  });
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [retreats, setRetreats] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRetreats = async () => {
      let url = `https://retreat-9avn.onrender.com/api/retreats?page=${page}&limit=3`;
      if (filter.title) url += `&search=${filter.title}`;
      if (filter.location) url += `&location=${filter.location}`;
      if (filter.type) url += `&filter=${filter.type}`;
      if (filter.date) url += `&date=${filter.date}`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setRetreats(data.results);
        setTotalPages(Math.ceil(data.count / 3)); // Adjust if `limit` changes
        setError(''); // Clear any previous errors
      } catch (error) {
        setError('Connection error');
      }
    };

    fetchRetreats();
  }, [filter, page]);

  return (
    <div>
      <Header />
      <Filter filter={filter} setFilter={setFilter} />
      {error && <div className="error">{error}</div>}
      <RetreatList retreats={retreats} />
      <div className="flex justify-between p-4">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="p-2 bg-blue-600 text-white rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="self-center">Page {page} of {totalPages}</span>
        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
          className="p-2 bg-blue-600 text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;