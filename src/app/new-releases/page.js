import AniflixNav from '../components/navbar'

export default function NewReleases() {
    const new_releases_nav = [{}];
    return (<>
        
        <div className="relative bg-midnight-black bg-cover w-screen h-screen">
            <div className="relative bg-electric-blue">
                <AniflixNav navbarItems={new_releases_nav}/>
            </div>
        </div>
    </>);
}