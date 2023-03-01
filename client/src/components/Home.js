import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";

const Home = () => {
  const [thread, setThread] = useState("");
  const [threadList, setThreadList] = useState("");
  const navigate = useNavigate();

  // 👇 useEffect Hook
  useEffect(() => {
    const checkUser = () => {
      if (!localStorage.getItem("_id")) {
        navigate("/");
      } else {
        fetch("http://localhost:4000/api/all/threads")
          .then((res) => res.json())
          .then((data) => setThreadList(data.threads))
          .catch((err) => console.error(err));
      }
    };
    checkUser();
  }, [navigate]);

  const createThread = () => {
    fetch("http://localhost:4000/api/create/thread", {
      method: "POST",
      body: JSON.stringify({ thread, userId: localStorage.getItem("_id") }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        setThreadList(data.threads);
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createThread();
    setThread("");
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

        <div className="thread__container">
          {threadList.localeCompare((thread) => (
            <div className="thread__item" key={thread.id}>
              <p>{thread.title}</p>
              <div className="react__container">
                <Likes
                  numberOfLikers={thread.likes.length}
                  threadId={thread.id}
                />
                <Comments
                  numberOfComments={thread.replies.length}
                  threadId={thread.id}
                  title={thread.title}
                />
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
