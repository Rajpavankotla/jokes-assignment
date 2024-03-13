import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";

const Homepage = ({ setLoggedIn }) => {
  const [jokes, setJokes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchJokes();
  }, []);

  const handleLogout = () => {
    setLoggedIn(false);
  };
  const fetchJokes = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10"
      );
      const data = await response.json();
      setJokes(data.jokes);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching jokes:", error);
    }
  };

  return (
    <Container className="w-90 h-80">
      <h2>Jokes {'\u{1F602}'}</h2>
      {isLoading && (
        <div class="spinner-border text-info" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      )}

      <table className="table table-bordered border-primary table-warning w-80">
        <thead>
          <tr>
            <th>ID</th>
            <th>Joke</th>
          </tr>
        </thead>
        <tbody>
          {jokes.map((joke, index) => (
            <tr key={joke.id} className="table-yellow text-start">
              <td className="table-dark p-3 ">{index + 1}</td>
              <td className="table-secondary p-3">{joke.joke}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex gap-3 justify-content-center mb-4">
        <Button variant="danger" type="button" onClick={handleLogout}>
          Logout
        </Button>
        <Button variant="success" type="button" onClick={fetchJokes}>
          More Fun
        </Button>
      </div>
    </Container>
  );
};

export default Homepage;
