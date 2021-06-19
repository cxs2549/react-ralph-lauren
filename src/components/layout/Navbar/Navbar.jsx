import { Link, NavLink } from "react-router-dom"
import { SearchIcon } from "@heroicons/react/solid"
import { HeartIcon } from "@heroicons/react/solid"
import { UserIcon } from "@heroicons/react/solid"
import { ShoppingBagIcon } from "@heroicons/react/solid"

import styled from "styled-components"
import MenuButton from "./Menu/MenuButton"
import logo from "../../../assets/logo.png"

const StyledNav = styled.header`
    nav {
        padding: 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        background: #33333345;
        color: white;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        @media screen and (min-width: 768px) {
            padding: 1rem 20px;
        }
        @media screen and (min-width: 1280px) {
            padding: 1rem 56px;
        }
        .activeTab {
            position: relative;
            transition: 1s ease;
            &::after {
                content: "";
                position: absolute;
                bottom: -6px;
                left: 0;
                width: 100%;
                height: 2px;
                background: white;
            }
        }
        #left,
        #right {
            display: flex;
            align-content: center;
            /* justify-content: flex-end; */
            width: 10%;
            @media screen and (min-width: 768px) {
                width: auto;
                justify-content: flex-start;
            }
        }
        #left {
            #logo {
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                @media screen and (min-width: 1024px) {
                    transform: translate(0);
                }
            }
            @media screen and (min-width: 768px) {
                gap: 2rem;
            }
            @media screen and (min-width: 1280px) {
                gap: 3rem;
            }
        }
        #right {
            justify-content: flex-end;
            & > div {
                cursor: pointer;
            }
            @media screen and (min-width: 768px) {
                gap: 1.2rem;
            }
        }
    }
`

const Navbar = () => {
    const links = [
        { name: "men", to: "/men" },
        { name: "women", to: "/women" },
        { name: "kids & baby", to: "/kids-baby" },
        { name: "home", to: "/home" },
        { name: "gifts", to: "/gifts" },
        { name: "world of RL", to: "/world-of-rl" },
        { name: "sale", to: "/sale" },
    ]

    return (
        <StyledNav>
            <nav>
                <div id="left">
                    <div className="lg:hidden">
                        <MenuButton links={links} />
                    </div>
                    <div id="logo" className="absolute lg:static text-3xl flex items-center">
                        <NavLink to="/" end activeClassName="activeTab">
                            <img src={logo} alt="" className="w-56 " />
                        </NavLink>
                    </div>

                    <div className="hidden lg:flex whitespace-nowrap gap-5 xl:gap-10 items-center uppercase text-xs font-semibold text-gray-300">
                        {links.map((link) => (
                            <NavLink
                                to={link.to}
                                activeClassName="activeTab text-white"
                                className="hover:text-gray-300"
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>
                </div>

                <div id="right">
                    <div className="space-x-5 xl:space-x-6 text-lg flex items-center">
                        <Link to="/search">
                            <SearchIcon className="h-5 w-5" />
                        </Link>
                        <Link to="/wishlist" className="hidden md:block">
                            <HeartIcon className="h-5 w-5" />
                        </Link>
                        <Link to="/account" className="hidden md:block">
                            <UserIcon className="h-5 w-5" />
                        </Link>
                        <Link to="/bag">
                            <ShoppingBagIcon className="h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </nav>
        </StyledNav>
    )
}

export default Navbar
