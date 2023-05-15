import React, { Component } from "react"
import Axios from "axios"
import * as JsSearch from "js-search"
import { Link } from "gatsby"

class Search extends Component {
  state = {
    bookList: [],
    search: [],
    searchResults: [],
    isLoading: true,
    isError: false,
    searchQuery: "",
  }
  /**
   * React lifecycle method to fetch the data
   */
  async componentDidMount() {
    Axios.get("/blog/post_feed-1.json")
      .then(result => {
        const bookData = result.data.filter.items
        this.setState({ bookList: bookData })
        this.rebuildIndex(bookData)
      })
      .catch(err => {
        this.setState({ isError: true })
      })
  }

  /**
   * rebuilds the overall index based on the options
   */
  rebuildIndex = documents => {
    const search = new JsSearch.Search("id")
    /**
     * defines an indexing strategy for the data
     * more about it in here https://github.com/bvaughn/js-search#configuring-the-index-strategy
     */
    search.indexStrategy = new JsSearch.PrefixIndexStrategy()
    /**
     * defines the sanitizer for the search
     * to prevent some of the words from being excluded
     *
     */
    search.sanitizer = new JsSearch.LowerCaseSanitizer()
    /**
     * defines the search index
     * read more in here https://github.com/bvaughn/js-search#configuring-the-search-index
     */
    search.searchIndex = new JsSearch.TfIdfSearchIndex("title")
    search.addIndex("title")
    search.addIndex("tags")
    search.addDocuments(documents)
    this.setState({ search: search, isLoading: false })
  }

  /**
   * handles the input change and perform a search with js-search
   * in which the results will be added to the state
   */
  searchData = e => {
    const { search } = this.state
    if (search?.search) {
      const queryResult = search.search(e.target.value)
      this.setState({ searchQuery: e.target.value, searchResults: queryResult })
    }
  }
  handleSubmit = e => {
    e.preventDefault()
  }

  render() {
    const { searchResults, searchQuery } = this.state
    return (
      <div>
        <div style={{ margin: "0 auto" }}>
          <form onSubmit={this.handleSubmit}>
            <div style={{ margin: "0 auto" }}>
              <input
                id="Search"
                className="search"
                value={searchQuery}
                onChange={this.searchData}
                placeholder="Search"
              />
            </div>
          </form>
          {searchQuery && (
            <div>
              {searchResults?.length ? (
                <ol style={{ listStyle: `none` }}>
                  {searchResults.map(post => {
                    const title = post.title || post.slug
                    return (
                      <li key={post.slug} className="list-item">
                        <article
                          className="post-list-item"
                          itemScope
                          itemType="http://schema.org/Article"
                        >
                          <div>
                            <header>
                              <h2>
                                <Link to={post.url} itemProp="url">
                                  <span itemProp="headline">{title}</span>
                                </Link>
                              </h2>
                              <small>{post.date}</small>
                            </header>
                            <section>
                              <p
                                dangerouslySetInnerHTML={{
                                  __html: post.description || post.excerpt,
                                }}
                                itemProp="description"
                              />
                            </section>
                          </div>
                        </article>
                      </li>
                    )
                  })}
                </ol>
              ) : (
                <div style={{ marginTop: "2em" }}>
                  <span>No matching results</span>
                </div>
              )}
            </div>
          )}
        </div>
        <div style={{ marginTop: "2em" }}>
          <Link to="/">Back home</Link>
        </div>
      </div>
    )
  }
}
export default Search
