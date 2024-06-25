import { User } from "@nextui-org/react";
function Account({account_name, image}){
    const name = account_name;
    const profile_image = image;
    
    
    return(
    <>
    <div>
        <User 
        name={name}
        avatarProps={{src: profile_image ? profile_image : <use xlinkHref="bootstrap-icons.svg#person-circle"/>, alt: "Profile Picture"}}
        />
    </div>
    </>
);}





export default Account;