import React, { Component } from "react";

class QuoteBox extends Component {
  state = {
    authorQuotes: [
      {
        quote: "this is a quote",
        author: "-me",
      },
      {
        quote: "this is also a quote",
        author: "-him",
      },
      {
        quote: "this is a quote about being a quote",
        author: "-her",
      },
      {
        quote: "this is THE NEW QUOTE",
        author: "-cat",
      },
    ],

    currentQuote: {
      quote: "Click the button below to get a quote!",
      author: "-dev",
    },

    bgColors: ["bg-primary", "bg-dark", "bg-warning"],

    currentBg: "bg-light",
  };

  handleNewQuote = () => {
    const totalQuotes = this.state.authorQuotes.length;
    const totalBgs = this.state.bgColors.length;

    function randomNum() {
      return Math.floor(Math.random() * totalQuotes);
    }

    function randomBg() {
      return Math.floor(Math.random() * totalBgs);
    }

    console.log(this.state.currentBg);

    this.setState({ currentBg: this.state.bgColors[randomBg()] });
    this.setState({ currentQuote: this.state.authorQuotes[randomNum()] });
  };

  render() {
    return (
      <div id="quote-box" className="border rounded bg-light">
        <h4 id="text" className="text-primary">
          {this.state.currentQuote.quote}
        </h4>
        <h6 id="author">{this.state.currentQuote.author}</h6>
        <button
          id="new-quote"
          onClick={() => this.handleNewQuote()}
          className="btn btn-secondary btn-sm"
        >
          New Quote!
        </button>
        <a
          className="button"
          id="tweet-quote"
          title="tweet this quote!"
          target="_blank"
          href="twitter.com/intent/tweet"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            margin="10"
            fill="currentColor"
            className="bi bi-twitter"
            viewBox="0 0 16 16"
          >
            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
          </svg>
        </a>
      </div>
    );
  }
}

export default QuoteBox;
