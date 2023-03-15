import "./Featured.scss"

const Featured = () => {
    return ( 
        <div className="featured">
            <div className="container">
                <div className="left">
                    <h1 className="title">Find the perfect <i>freelance</i> services for your business</h1>
                    <div className="search">
                        <div className="searchInput">
                            <img src="./img/search.png" alt="" />
                            <input placeholder= 'Try "Write a poem"'type="text" />
                        </div>
                        <button>Search</button>
                    </div>
                    <div className="popular">
                        <span>Popular:</span>
                        <button>Mystery</button>
                        <button>Marriage</button>
                        <button>Friendship</button>
                        <button>Romance</button>
                        <button>Heartbreak</button>
                    </div>
                </div>
                <div className="right">
                    <img src="./img/man.png" alt="" />
                </div>
            </div>
        </div>
     );
}
 
export default Featured;