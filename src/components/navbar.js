import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";


function AniflixNav({ navbarItems }) {
    return (
        <>
            <Navbar>
                <NavbarBrand>
                    <Link className="text-black" href="/home">Aniflix</Link> 
                </NavbarBrand>
                <NavbarContent>
                    {navbarItems.map((item, index) => (
                        <NavbarItem key={index}>
                            {item.component || ( 
                                <div className={item.styling}>
                                    <Link className={item.linkStyle} href={item.link}>{item.name}</Link>
                                </div>
                            )}
                        </NavbarItem>
                    ))}
                </NavbarContent>
            </Navbar>
        </>
    );
}
export default AniflixNav;