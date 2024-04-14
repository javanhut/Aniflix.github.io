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
            <AniflixNav navbarItems={tvShowLinks} />
        </>
    );
}

export default Shows;