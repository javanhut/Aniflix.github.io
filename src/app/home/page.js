"use client";

const { default: AniflixNav } = require("../../components/navbar");

function Home() {
    const home_nav_items = [
        { name: "Tv Shows", link: "shows", styling: "", lstyle: "" },
        { name: "Movies", link: "movies", styling: "", lstyle: "" },
        { name: "New Releases", link: "", styling: "", lstyle: "text-black" },
        { name: "Previously Watched", link: "", styling: "", lstyle: "" },
        
        
    ];
    return (<>
    <div className="bg-cover bg-sky-500">
        <AniflixNav navbarItems={home_nav_items} />
        <div className="bg-auto">
            <h1 className="bg-auto">
            </h1>
        </div>
        
        </div>
    </>);
}

export default Home;