"use client";
import { Dropdown, DropdownTrigger, DropdownItem, DropdownMenu, Link } from "@nextui-org/react";

function DropdownMenuComponent({ dropdownInfo, ButtonName }) {
    const buttonName = ButtonName;
    return (
        <Dropdown>
            <DropdownTrigger>
                <button>{buttonName}</button>
            </DropdownTrigger>
            <DropdownMenu>
                {dropdownInfo.map((item, index) => (
                    <DropdownItem key={index}>
                        <Link href={item.link}>{item.name}</Link>
                    </DropdownItem>
                ))}
            </DropdownMenu>
        </Dropdown>
    );
}

export default DropdownMenuComponent