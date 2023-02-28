import React, { useState } from "react";
import Nav from "./Nav";

const Home = () => {
  const [thread, setThread] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ thread });
    setThread();
  };

  return (
    <>
      <Nav />
      <main className="home">
        <h2 className="homeTitle">Create a Thread</h2>
        <form className="homeForm" onSumbit={handleSubmit}>
          <div className="home__container">
            <label htmlFor="thread">Title / Description</label>
            <input
              type="text"
              name="thread"
              required
              value={thread}
              onChange={(e) => setThread(e.target.value)}
              placeholder="Your thread will shown to all other user"
            />
          </div>
          <button className="homeBtn">CREATE THREAD</button>
        </form>
      </main>
    </>
  );
};

export default Home;
