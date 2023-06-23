import "./Featured.scss"

const Featured = () => {
  return (
    <div className="featured">
        <div className="container">
            <div className="left">
                <h1><i>Corp-Wise connect:</i> Simplifying Finances </h1>
                <h2>A Platform for Connecting <i>CA & CS</i> to <i>Business Owners / Individual</i> to Get a Better Financial Solution</h2>
                <div className="search">
                    <div className="searchInput">
                        <img src="./img/search.png" alt="" />
                        <input type="text" placeholder="Search..."/>
                    </div>
                    <button>Search</button>
                </div>
                <div className="popular">
                    <span>Popular:</span>
                    <button>Legal and Financial</button>
                    <button>Private Companies</button>
                    <button>Public Companies</button>
                    <button>Registration of Start-up</button>
                    <button>Partnership Firms</button>

                </div>
            </div>
            <div className="right">
                <img src="./img/banner.svg" alt=""  />
            </div>
        </div>
    </div>
  )
}

export default Featured