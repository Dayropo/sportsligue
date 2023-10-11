import Sidebar from "../ui/Sidebar"

const SearchResults = ({ query }: { query: string }) => {
  return (
    <div className="posts-block">
      <div className="articles-box-style">
        <div className="news-post article-post">
          <div className="row">
            <div className="col-sm-5">
              <div className="post-image">
                <a href="single-post">
                  <img src="upload/blog/s3.jpg" alt="" />
                </a>
                <a className="category" href="#">
                  Athletic
                </a>
              </div>
            </div>
            <div className="col-sm-7">
              <h2>
                <a href="single-post.html">
                  The Guardian view on Germany’s coalition deal: Merkel in the
                  balance
                </a>
              </h2>
              <ul className="post-tags">
                <li>
                  <i className="lnr lnr-user"></i>by <a href="#">John Doe</a>
                </li>
                <li>
                  <a href="#">
                    <i className="lnr lnr-book"></i>
                    <span>23 comments</span>
                  </a>
                </li>
              </ul>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
        <div className="news-post article-post">
          <div className="row">
            <div className="col-sm-5">
              <div className="post-image">
                <a href="single-post">
                  <img src="upload/blog/s4.jpg" alt="" />
                </a>
                <a className="category" href="#">
                  Basketball
                </a>
              </div>
            </div>
            <div className="col-sm-7">
              <h2>
                <a href="single-post.html">
                  Philip Dunne, sacked after his NHS remarks, must now face his
                  constituents
                </a>
              </h2>
              <ul className="post-tags">
                <li>
                  <i className="lnr lnr-user"></i>by <a href="#">John Doe</a>
                </li>
                <li>
                  <a href="#">
                    <i className="lnr lnr-book"></i>
                    <span>23 comments</span>
                  </a>
                </li>
              </ul>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
        <div className="news-post article-post">
          <div className="row">
            <div className="col-sm-5">
              <div className="post-image">
                <a href="single-post">
                  <img src="upload/blog/s5.jpg" alt="" />
                </a>
                <a className="category" href="#">
                  Bicycle
                </a>
              </div>
            </div>
            <div className="col-sm-7">
              <h2>
                <a href="single-post.html">
                  Cameroon’s heartbreaking struggles are a relic of British
                  colonialism
                </a>
              </h2>
              <ul className="post-tags">
                <li>
                  <i className="lnr lnr-user"></i>by <a href="#">John Doe</a>
                </li>
                <li>
                  <a href="#">
                    <i className="lnr lnr-book"></i>
                    <span>23 comments</span>
                  </a>
                </li>
              </ul>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
        <div className="news-post article-post">
          <div className="row">
            <div className="col-sm-5">
              <div className="post-image">
                <a href="single-post">
                  <img src="upload/blog/s6.jpg" alt="" />
                </a>
                <a className="category" href="#">
                  Tennis
                </a>
              </div>
            </div>
            <div className="col-sm-7">
              <h2>
                <a href="single-post.html">
                  Ramaphosa vows to fight corruption in ruling ANC
                </a>
              </h2>
              <ul className="post-tags">
                <li>
                  <i className="lnr lnr-user"></i>by <a href="#">John Doe</a>
                </li>
                <li>
                  <a href="#">
                    <i className="lnr lnr-book"></i>
                    <span>23 comments</span>
                  </a>
                </li>
              </ul>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
        <div className="news-post article-post">
          <div className="row">
            <div className="col-sm-5">
              <div className="post-image">
                <a href="single-post">
                  <img src="upload/blog/s7.jpg" alt="" />
                </a>
                <a className="category" href="#">
                  Winter Sports
                </a>
              </div>
            </div>
            <div className="col-sm-7">
              <h2>
                <a href="single-post.html">
                  The Guardian view on Germany’s coalition deal: Merkel in the
                  balance
                </a>
              </h2>
              <ul className="post-tags">
                <li>
                  <i className="lnr lnr-user"></i>by <a href="#">John Doe</a>
                </li>
                <li>
                  <a href="#">
                    <i className="lnr lnr-book"></i>
                    <span>23 comments</span>
                  </a>
                </li>
              </ul>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
        <ul className="pagination-list">
          <li>
            <a href="#">Prev</a>
          </li>
          <li>
            <a href="#" className="active">
              1
            </a>
          </li>
          <li>
            <a href="#">2</a>
          </li>
          <li>
            <a href="#">3</a>
          </li>
          <li>
            <a href="#">...</a>
          </li>
          <li>
            <a href="#">6</a>
          </li>
          <li>
            <a href="#">Next</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SearchResults
