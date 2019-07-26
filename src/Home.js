import React from 'react';

function Home() {
  return (
    <div className="Home">
      <h1>Lequture</h1>
      <h2>Home</h2>
      <p>
        This is the home page. Please navigate to
        <ul>
          <li><code>/student?version=0</code> for the student (small screen) panel</li>
          <li><code>/instructor</code> for the instructor (large screen) view</li>
        </ul>
      </p>
    </div>
  );
}

export default Home;
