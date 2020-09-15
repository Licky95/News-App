import React, { Component } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";

class NewsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sources: [],
      selectedSource: "bbc-news",
      loading: true,
    };
    this.onChange = this.onChange.bind(this);
  }
  //Code to fetch different news sources
  componentDidMount() {
    const api = "https://newsapi.org/v2/sources?language=en&apiKey=";
    this.setState({ loading: true });
    axios.get(api + process.env.REACT_APP_API_KEY).then((response) => {
      let sourcesData = response.data;
      this.setState({ ...this.state, sources: sourcesData.sources, loading: false });
    })
      .catch(err => {
        this.setState({
          ...this.state, loading: true
        })
      });
  }
  // Handler to set selected news source to state
  onChange(e) {
    this.setState({
      selectedSource: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <div className="App-header">
          <h2>News App</h2>
        </div>

        <div>
          <div className="searchBox">
            {this.state.loading ? (
                <h4>Loading. . .</h4>
            ) : (
                <select
                  value={this.state.selectedSource}
                  onChange={this.onChange}
                >
                  {this.state.sources.map((source) => (
                    <option key={source.id} value={source.id}>
                      {source.name}
                    </option>
                  ))}
                </select>
              )}
          </div>

          {!this.state.loading && (
            <div className="content-container">
              <div className="scrollText">
                <h4>{` You are viewing ${this.state.selectedSource.toUpperCase()} bulletins`}</h4>
              </div>
              <NewsItem selectedSource={this.state.selectedSource} />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default NewsList;
