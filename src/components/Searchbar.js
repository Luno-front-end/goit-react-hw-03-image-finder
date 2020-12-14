import React, { Component } from "react";
import shortid from "shortid";

import "../styles/styles.css";

// import FetchAPI from "./FetchAPI";

export default class Searchbar extends Component {
  state = {
    nameImage: "",
  };

  onValueInput = (e) => {
    // const { name, value } = e.currentTarget;
    // this.setState({ [name]: value });
    this.setState({ nameImage: e.currentTarget.value.toLowerCase() });
  };

  onSubmitFetch = (e) => {
    e.preventDefault();

    if (this.state.nameImage.trim() === "") {
      alert("Ім'я!!!");
      return;
    }
    this.props.onSubmit(this.state.nameImage.trim());
    this.setState({ nameImage: "" });
  };

  render() {
    const keySearch = shortid.generate();
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.onSubmitFetch}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>
          <input
            id={keySearch}
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="name"
            value={this.state.nameImage}
            onChange={this.onValueInput}
          />
        </form>
      </header>
      //   <form>
      //     <label htmlFor={keySearch}>Пошук</label>
      //     <input id={keySearch}></input>
      //   </form>
    );
  }
}
