import './VideoCard.scss'

const VideoCard = () => {
    return ( 
        <div className='videocard dark'>
            <div className="container">
                <div className="item">
                    <h1>
                       Lincoln <i>Business</i>
                    </h1>
                    <h1>A business solution designed for <i>teams</i></h1>
                    <p>
                        Upgrade to a curated experience packed with tools and benefits,
                        dedicated to businesses
                    </p>
                    
                    <div className="title">
                        <img src="./img/check.png" alt="" />
                        Connect to freelancers with proves business experience
                    </div>                    
                    <div className="title">
                        <img src="./img/check.png" alt="" />
                        Get matched with the perfet talent by a customer success manager
                    </div>
                    <div className="title">
                        <img src="./img/check.png" alt="" />
                        Manage teamwork and boost productivity with one powerful workspace
                    </div>
                    <button>Explore more Lincoln</button>                    
                </div>
                <div className="item">
                    <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29sbGFib3JhdGl2ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" controls></img>
                </div>
            </div>

        </div>
     );
}
 
export default VideoCard;