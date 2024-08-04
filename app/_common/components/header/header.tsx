import Image from "next/image";
import { HeaderSectionModel } from "../../models/home-page-model";
import Link from "next/link";
import { useEffect } from "react";
import { isDev } from "@common/utils";

interface Props {
    data: HeaderSectionModel;
    isMenuOpen: boolean;
    toggleMenu: () => void;
}

export const HeaderView: React.FC<Props> = ({
    data,
    isMenuOpen,
    toggleMenu,
}) => {
    const {
        headerSection: { companyLogo, companyName, hamburgerIcon, navItems },
    } = data;

    return (
        <>
            {/* <nav className="flex justify-between w-full px-2">
                <div className="flex items-center gap-8">
                    <Image
                        className="h-16"
                        src={`http://localhost:1337${companyLogo.url}`}
                        alt={companyLogo.alternativeText ?? ""}
                        width={companyLogo.width ?? 100}
                        height={companyLogo.height ?? 100}
                    />
                    <h1 className="text-lg uppercase">{companyName}</h1>
                </div>
                <div className="nav-items flex items-center gap-8">
                    {navItems.map((navItem, index) =>
                        navItem.isExternal ? (
                            <a
                                key={`nav-item-${index}`}
                                href={navItem.url}
                                className="text-base uppercase"
                            >
                                {navItem.text}
                            </a>
                        ) : (
                            <Link
                                key={`nav-item-${index}`}
                                href={navItem.url}
                                className="text-base uppercase"
                            >
                                {navItem.text}
                            </Link>
                        ),
                    )}
                </div>
            </nav> */}

            <nav className="bg-white border-gray-20">
                <div className="container flex flex-wrap items-center justify-between mx-auto p-4">
                    <a
                        href="/"
                        className="flex items-center space-x-3 rtl:space-x-reverse"
                    >
                        <Image
                            className="h-8"
                            src={`http://localhost:1337${companyLogo.url}`}
                            alt={companyLogo.alternativeText ?? ""}
                            width={50}
                            height={50}
                        />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap">
                            {companyName}
                        </span>
                    </a>
                    <button
                        onClick={toggleMenu}
                        data-collapse-toggle="navbar-default"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-controls="navbar-default"
                        aria-expanded={isMenuOpen}
                    >
                        <Image
                            src={`http://localhost:1337${hamburgerIcon.url}`}
                            alt={hamburgerIcon.alternativeText ?? ""}
                            width={100}
                            height={100}
                        />
                    </button>
                    <div
                        className={`${isMenuOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
                        id="navbar-default"
                    >
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
                            {navItems.map((navItem, index) => (
                                <li key={`nav-item-${index}`}>
                                    {navItem.isExternal ? (
                                        <a
                                            href={navItem.url}
                                            className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                                        >
                                            {navItem.text}
                                        </a>
                                    ) : (
                                        <Link
                                            href={navItem.url}
                                            className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                                        >
                                            {navItem.text}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};
