import AniflixNav from "@/components/navbar";

export default function RecentlyWatched() {
    const recently_watched_nav = [{}];
    return (<>
        
        <div className="relative bg-midnight-black bg-cover w-screen h-screen">
            <div className="relative bg-electric-blue">
                <AniflixNav navbarItems={recently_watched_nav}/>
            </div>
        </div>
    </>);
}