"use client";
import DropdownMenuComponent from "@/components/dropdown";
import AniflixNav from "@/components/navbar";


function Movies(){
    const dropdownInfo = [{ name: 'Action', link: "/action" }]; // Added a path for example
    const movie_nav_items = [
        { component: <DropdownMenuComponent dropdownInfo={dropdownInfo} ButtonName={"Genres"} /> },
        { name: "Recently Watched", link: "/recently-watched" },
        { name: "Your Recommended Movies", link: "/recommended-movies" }
    ];
    return(<>
    <AniflixNav navbarItems={movie_nav_items} />
    Movies</>);
}

export default Movies;