import React, { Suspense, useEffect, useRef } from "react";
import { useLocation } from "@reach/router";

import ListItem from "./ListItem";
import {
  BackgroundOverlay,
  CloeButton,
  ClosBox,
  CloseMenu,
  Container,
  Sidebar,
  SideBarInner,
  Title,
  UL,
} from "./style";
import useWindos from "../../Hooks/useWindos";

const RootSideBar = ({
  children,
  listArray,
  showSideMenu,
  closeSideMenu,
  navItemList,
  categories,
  ActiveItem,
  ActiveBlog,
}) => {
  const { width } = useWindos();
  const isTablet = width < 1024;
  const ref = useRef(null);

  const pathname = useLocation();
  const parts = pathname.pathname.split("/");

  const slug = ActiveItem
    ? ActiveItem
    : parts[parts.length - 1] === ""
    ? parts[parts.length - 2]
    : parts[parts.length - 1];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        if (isTablet && showSideMenu) {
          closeSideMenu();
        }
      }
    };

    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [closeSideMenu, isTablet, ref, showSideMenu]);

  // also scroll lock when sidebar is open
  useEffect(() => {
    if (isTablet && showSideMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isTablet, showSideMenu]);

  const activeItem =
    Array.isArray(listArray) &&
    listArray?.find((item) => {
      return item.slug.current === slug;
    });

  const activeItem1 =
    Array.isArray(navItemList) &&
    navItemList?.find((item) => {
      return item.slug.current === slug;
    });

  return (
    <>
      {isTablet && showSideMenu && (
        <BackgroundOverlay onClick={closeSideMenu} id="backgroundOverlay" />
      )}
      <Sidebar
        className={isTablet && showSideMenu ? "show" : ""}
        ref={ref}
        id="sidebar11"
        showMenu={showSideMenu}
        aeria-label="sidebar"
        aeria-hidden={isTablet && !showSideMenu}
        aeria-expanded={isTablet && showSideMenu}
      >
        <SideBarInner>
          {isTablet && (
            <Suspense fallback={<div>Loading...</div>}>
              <ClosBox isTablet={isTablet}>
                <CloeButton className="btn btn-icon" onClick={closeSideMenu}>
                  <CloseMenu />
                </CloeButton>
              </ClosBox>
            </Suspense>
          )}
          <Container>
            {/* show all titles and blogs in side bar have two variations  one for mobile and one for the desktop */}
            {!isTablet && (
              <>
                <ul id="5959">
                  {listArray?.map(
                    (item, index) =>
                      item.slug.current === slug && (
                        <ListItem
                          key={item._id}
                          href={item?.slug?.current}
                          label={item.title}
                          isActived={
                            activeItem?.slug.current === item.slug.current
                          }
                          slug={slug}
                          subItems={categories}
                          ActiveBlog={ActiveBlog}
                        />
                      ),
                  )}
                </ul>
              </>
            )}
            {isTablet && (
              <>
                <UL
                  show={isTablet}
                  style={
                    {
                      // marginTop: `${isCollection ? "1rem" : "2.5rem"}`,
                    }
                  }
                >
                  {navItemList &&
                    Array.isArray(navItemList) &&
                    navItemList.map((item, index) => (
                      <ListItem
                        key={item._id}
                        href={item?.slug?.current}
                        label={item.title}
                        isActived={
                          activeItem1?.slug.current === item.slug.current
                        }
                        onClick={closeSideMenu}
                        subItems={categories}
                        slug={slug}
                      />
                    ))}
                </UL>
              </>
            )}
          </Container>
          {children}
        </SideBarInner>
      </Sidebar>
    </>
  );
};

export default RootSideBar;
