import React from "react";

function SearchPage(props) {
  return (
    <div className="container">
      <section className="hero section">
        <h1 className="title has-text-centered">Search the Realm</h1>
      </section>
      <section>
        <div className="box">
          <div className="field has-addons">
            <div className="control">
              <button className="button is-outlined">Search</button>
            </div>
            <div className="control is-expanded">
              <input
                className="input has-text-centered"
                type="search"
                placeholder="» » » » » » Search for Games « « « « « «"
              />
            </div>
            <div className="control">
              <button className="button is-outlined">Search</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SearchPage;
