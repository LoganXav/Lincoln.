import "./Home.scss"
import Featured from "../../components/featured/Featured";
import Slide from "../../components/slide/Slide";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import { cards } from "../../data";
import { projects } from "../../data";
import ProjectCard from "../../components/projectCard/ProjectCard";
import CatCard from "../../components/catCard/CatCard";
import VideoCard from "../../components/videoCard/VideoCard";
import VideoCard2 from "../../components/videoCard/VideoCard2";

const Home = () => {
    return ( 
        <div className="home">
           <Featured />
           <TrustedBy />
           <Slide slidesToShow ={5} arrowsScroll={5}>
            {cards.map((card) => (
               <CatCard item={card} key={card.id} />
            ))}
            </Slide>
            <VideoCard />
            <VideoCard2 />
            <Slide slidesToShow ={4} arrowsScroll={4}>
            {projects.map((project) => (
               <ProjectCard item={project} key={project.id} />
            ))}
            </Slide>
        </div>
     );
}
 
export default Home;