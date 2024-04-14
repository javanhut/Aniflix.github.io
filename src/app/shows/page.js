"use server";
import DropdownMenuComponent from "@/components/dropdown";
import AniflixNav from "@/components/navbar";


function Shows() {
    const dropdownInfo = [{ name: 'Action', link: "/action" }]; // Added a path for example
    const tvShowLinks = [
        { component: <DropdownMenuComponent dropdownInfo={dropdownInfo} ButtonName={"Genres"} /> },
        { name: "Recently Watched", link: "/recently-watched" },
        { name: "Recommended Series", link: "/recommended-series" }
    ];

    return (
        <>  
        <div className="relative bg-midnight-black w-screen h-screen bg-cover">
            <AniflixNav navbarItems={tvShowLinks} />
        </div>
        </>
    );
}

export default Shows;