import React, { useState } from "react";
import styled from "styled-components";

import { NavButton } from "./themeButton";
import { Link } from "gatsby";
import useWindos from "../../Hooks/useWindos";

const SearchI = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" role="presentation">
        <path
            d="M16.436 15.085l3.94 4.01a1 1 0 01-1.425 1.402l-3.938-4.006a7.5 7.5 0 111.423-1.406zM10.5 16a5.5 5.5 0 100-11 5.5 5.5 0 000 11z"
            fill="currentColor"
            fill-rule="evenodd"
        ></path>
    </svg>
);

const DialogContent = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    padding: 1rem;
    width: 100%;
    height: 100%;
    z-index: 100;

    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;

    transition: transform 0.3s ease-in-out;

    .DialogOverlay {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background-color: ${(props) => props.theme.navbar.modalOverlay};
    }

    .DialogContent {
        position: relative;
        width: 100%;
        height: 100%;
    }
`;

const SearchContainer = styled.div`
    margin: 50px auto;
    max-width: 600px;
    height: max-content;
    background-color: ${(props) => props.theme.navbar.modalBackground};
    color: ${(props) => props.theme.navbar.color};
    border-radius: 3px;
    box-shadow: var(
        --ds-shadow-overlay,
        0 0 0 1px rgba(9, 30, 66, 0.08),
        0 2px 1px rgba(9, 30, 66, 0.08),
        0 0 20px -6px rgba(9, 30, 66, 0.31)
    );
`;

const CloseWrapper = styled.div`
    display: flex;
    padding: 22px 24px 24px;
    position: relative;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: end;
    justify-content: flex-end;

    button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
        padding: 10px;
        border-radius: 5px;

        span {
            color: ${(props) => props.theme.navbar.color};
            font-size: 14px;
            font-weight: 500;
            text-transform: capitalize;
        }

        &:hover {
            background-color: ${(props) => props.theme.navbar.hoverBackground};
        }
    }
`;

const InputWrapper = styled.div`
    display: flex;
    aling-items: center;
    cursor: text;
    font-size: 14px;
    overflow: hidden;
    overflow-wrap: break-word;
    vertical-align: top;
    pointer-events: auto;
    border-radius: 3px;
    border-width: 2px;
    border-style: solid;
    border-color: ${(props) => props.theme.searchModule.borderColor};
    background-color: ${(props) => props.theme.searchModule.background};
    color: ${(props) => props.theme.searchModule.color};

    input {
        border: none;
        outline: none;
        background-color: transparent;
        color: ${(props) => props.theme.searchModule.color};
        font-size: 14px;
        padding: 0.5rem 0.5rem 0.5rem 0.5rem;
        width: 100%;
        height: 100%;
        font-family: inherit;
        font-weight: 500;
        text-transform: capitalize;
    }

    span {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 6px;

        svg {
            color: ${(props) => props.theme.searchModule.iconColor} !important;
        }
    }

    &:focus-within {
        border-color: ${(props) => props.theme.searchModule.focusBorderColor};
    }
`;
const SeachBar = () => {
    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [loading, setLoading] = useState(false);

    const [isOpen, setIsOpen] = useState(false);
    const ref = React.useRef(null);
    let debouncer;

    const searchData = async (search) => {
        setLoading(true);
        // const data = await getAllData();

        // clearTimeout(debouncer)
        // debouncer = setTimeout(() => {
        //   setLoading(true)
        //   const filteredData = data.filter((item) => {
        //     const searchableText = Object.values(item).filter((value) => {
        //       return typeof value === 'string'
        //     })
        //     return searchableText.some((value) => {
        //       return (value as string).toLowerCase().includes(search.toLowerCase())
        //     })
        //   })
        //   setSearchResult(filteredData)
        //   setLoading(false)
        // }, 1000)
    };

    const handleChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
        searchData(search);
    };

    const handleClear = () => {
        setSearch("");
        setSearchResult([]);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Escape") {
            handleClear();
        }
    };

    const handleFocus = () => {
        if (search !== "") {
            searchData(search);
        }
    };

    const openDialog = () => {
        setIsOpen(true);
    };

    const closeDialog = () => {
        setIsOpen(false);
    };

    // on click outside close dialog
    React.useEffect(() => {
        const handleOutsideClick = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                closeDialog();
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [ref]);

    const { width } = useWindos();
    const isTablet = width < 1024;

    return (
        <>
            <NavButton onClick={openDialog}>
                <i>
                    <SearchI />
                </i>
                {!isTablet && <span>Search</span>}
            </NavButton>
            {isOpen && (
                <>
                    <DialogContent className="DialogContent">
                        <div className="DialogOverlay" />
                        <div className="DialogContent">
                            <div
                                ref={ref}
                                style={{
                                    display: "contents",
                                }}
                            >
                                <SearchContainer>
                                    <div
                                        style={{
                                            padding: "1rem",
                                        }}
                                    >
                                        <InputWrapper
                                            role="presentation"
                                            data-ds--text-field--container="true"
                                            data-ds--text-field--has-end-icon="true"
                                        >
                                            <span>
                                                <SearchI />
                                            </span>
                                            <input
                                                id="search"
                                                type="text"
                                                autoComplete="off"
                                                placeholder="Search"
                                                data-ds--text-field--input="true"
                                                data-ds--text-field="true"
                                                value={search}
                                                onChange={handleChange}
                                                onKeyDown={handleKeyDown}
                                                onFocus={handleFocus}
                                            />
                                        </InputWrapper>
                                    </div>

                                    {loading && (
                                        <div>
                                            <p>Loading...</p>
                                        </div>
                                    )}

                                    {searchResult?.length === 0 && !loading && (
                                        <div>
                                            <p>No result found</p>
                                        </div>
                                    )}

                                    <div>
                                        {searchResult?.map((item, index) => (
                                            <div
                                                key={index}
                                                style={{
                                                    padding: "1rem",
                                                }}
                                            >
                                                <Link
                                                    href={
                                                        item?._type ===
                                                        "collectionPage"
                                                            ? `/collection/${item?.slug?.current}`
                                                            : `/blog/${item?.slug?.current}`
                                                    }
                                                    aeria-label="search result"
                                                >
                                                    <p>{item?.title}</p>
                                                    <p>{item?.description}</p>
                                                </Link>
                                            </div>
                                        ))}
                                    </div>

                                    <CloseWrapper>
                                        <button onClick={closeDialog}>
                                            <span>Close</span>
                                        </button>
                                    </CloseWrapper>
                                </SearchContainer>
                            </div>
                        </div>
                    </DialogContent>
                </>
            )}
        </>
    );
};

export default SeachBar;
