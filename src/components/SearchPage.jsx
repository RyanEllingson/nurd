import React from "react";

function SearchPage(props) {
  return (
    <div>
      <section class="hero section">
        <h1 className="title has-text-centered">Search the Realm</h1>
      </section>
      <section>
        <div class="box">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-outlined">Search</button>
            </div>
            <div class="control is-expanded">
              <input
                class="input has-text-centered"
                type="search"
                placeholder="» » » » » » Search for Games « « « « « «"
              />
            </div>
            <div class="control">
              <button class="button is-outlined">Search</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SearchPage;
