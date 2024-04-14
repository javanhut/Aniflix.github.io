"use client";
import DropdownMenuComponent from "@/components/dropdown";
import AniflixNav from "@/components/navbar";


function Movies() {
    const dropdownInfo = [{ name: 'Action', link: "/action" }]; // Added a path for example
    const movie_nav_items = [
        { component: <DropdownMenuComponent dropdownInfo={dropdownInfo} ButtonName={"Genres"} /> },
        { name: "Recently Watched", link: "/recently-watched" },
        { name: "Your Recommended Movies", link: "/recommended-movies" }
    ];
    return (<>
        <div className="relative bg-midnight-black bg-cover w-screen h-screen">
            <div className="relative bg-electric-blue">
                <AniflixNav navbarItems={movie_nav_items} />
            </div>
        </div>
        </>);
}

export default Movies;