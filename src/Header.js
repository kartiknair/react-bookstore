import React, { Component } from "react";
import "./header.css";
import logo from "./readmoreFullLogo.svg";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false
    };
    this.search = this.search.bind(this);
  }

  search(e) {
    e.preventDefault();
    if (
      this._inputElement.value.length &&
      this._inputElement.value.length >= 4
    ) {
      this.setState({
        error: false
      });
      this.props.updateBooks(this._inputElement.value);
    } else {
      this.setState({
        error: true
      });
    }
  }

  render() {
    return (
      <div id="header">
        <img src={logo} alt="LOGO" className="logo" />
        <div className="search-container">
          <form className="search-bar" onSubmit={this.search}>
            <input
              ref={a => (this._inputElement = a)}
              className="search-input"
              type="text"
              placeholder="Find a book..."
            />
            <button className="search-button" type="submit">
              <i className="fas fa-search" />
              <p className="search-button-text">Search</p>
            </button>
          </form>
          <p className={`error ${this.state.error ? "" : "hidden"}`}>
            Search must be atleast 4 characters
          </p>
          <p className={`error ${this.props.noResults ? "" : "hidden"}`}>
            No results
          </p>
        </div>
      </div>
    );
  }
}

export default Header;
