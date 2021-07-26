import useFetch from "../../../api/useFetch";
import { Link } from "react-router-dom";
import SearchList from "../../../pages/search/Search";
import React, { useEffect, useState } from "react";
import jQuery from "jquery";

const Navigation = () => {
  const [title, setTitle] = useState("");
  const [showMe, setShowMe] = useState(false);

  useEffect(() => {
    (function ($) {
      jQuery(document).ready(function ($) {
        /*dropdown menu hover*/
        if (document.documentElement.clientWidth > 1200) {
          jQuery("ul li.dropdown").hover(
            function () {
              jQuery(this)
                .children("ul.dropdown-menu")
                .stop(!0, !0)
                .slideDown();
              $(this).addClass("open");
            },
            function () {
              jQuery(this).children("ul.dropdown-menu").stop(!0, !0).slideUp();
              $(this).removeClass("open");
            }
          );
        }
      });


    })(jQuery);
  }, []);

  function handleClick(e) {
    e.stopPropagation();
    setShowMe(!showMe);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // router.push(`/search`);
  };

  const {
    data: menu,
    error,
    isPending,
  } = useFetch("https://www.uniquefm.com.np/api/get-navigation-data");

  return (
    <div className="navigation_box mains">
      {isPending && <></>}
      {error && <div>{error}</div>}
      {menu && (
        <ul>
          <li>
            <NavItem
              className="home-text"
              url="/"
              title="गृहपृष्ठ"
              label="गृहपृष्ठ"
            />
          </li>
          <li className="dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="/#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              प्रदेश समाचार
            </a>
            <ul className="dropdown-menu">
              {menu.province.map((c) => (
                <NavItem
                  key={c.slug}
                  title={c.np_name}
                  url={`/${c.slug}`}
                  label={c.np_name}
                />
              ))}
            </ul>
          </li>

          {menu.category
            .filter(
              (menu) => menu.parent_name !== "अन्य" && menu.name !== "अन्य"
            )
            .map((c) => (
              <li
                key={c.id}
                className={`${
                  typeof c.parents === "undefined" ? "" : "d-none"
                }`}
              >
                <NavItem
                  key={c.id}
                  url={`/newsList/${c.id}`}
                  title={c.name}
                  label={c.name}
                />
              </li>
            ))}

          <li className="dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="/#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              अन्य
            </a>
            <ul className="dropdown-menu">
              {menu.category.map((c) => (
                <li
                  key={c.id}
                  className={`${
                    typeof c.parents === "undefined" ? "d-none" : ""
                  }`}
                >
                  <NavItem
                    key={c.id}
                    title={c.name}
                    url={`/${c.slug}`}
                    label={c.name}
                  />
                </li>
              ))}
            </ul>
          </li>

          {/* <NavItem url="/newsList" title="मनोरञ्जन" label="मनोरञ्जन" />
        <NavItem url="/newsList" title="खेलकुद" label="खेलकुद" />
        <NavItem url="/newsList" title="अन्तराष्टिय" label="अन्तराष्टिय" /> */}

          {/* <li className="dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="/#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Countdown
          </a>
          <ul className="dropdown-menu">
            <NavItem
              url="/countDown"
              title="Mission &amp; Vision"
              label="Pop Countdown"
            />
            <NavItem
              url="/newsList"
              title="Management Team"
              label="Lok Dohori"
            />
            <NavItem url="/newsList" title="History" label="Filmy Songs" />
            <NavItem url="/newsList" title="Background" label="English Songs" />
            <li className="dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Another Menu
              </a>
              <ul className="dropdown-menu">
                <NavItem
                  url="/countDown"
                  title="Mission &amp; Vision"
                  label="Submenu 1"
                />
                <NavItem
                  url="/newsList"
                  title="Management Team"
                  label="Submenu 2"
                />
                <NavItem url="/newsList" title="History" label="Submenu 3" />

                <li className="dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Another Menu
                  </a>
                  <ul className="dropdown-menu">
                    <NavItem
                      url="/countDown"
                      title="Mission &amp; Vision"
                      label="Submenu 1"
                    />
                    <NavItem
                      url="/newsList"
                      title="Management Team"
                      label="Submenu 2"
                    />
                    <NavItem
                      url="/newsList"
                      title="History"
                      label="Submenu 3"
                    />
                  </ul>
                </li>
              </ul>
            </li>
            <NavItem url="/newsList" title="Bakground" label="Hindi Songs" />
          </ul>
        </li> */}
          {/* <NavItem url="/newsList" title="फोटो ग्यालरी" label="फोटो ग्यालरी" />
        <NavItem
          url="/videoList"
          title="भिडियो ग्यालरी"
          label="भिडियो ग्यालरी"
        /> */}

          <li className="search" onClick={handleClick}>
            <a href="#!" title="Search" className="btn-search">
              <span className="text-white cursor-pointer left-icon lnr lnr-magnifier"></span>
            </a>
          </li>
        </ul>
      )}
      <form
        className="search-site"
        onSubmit={handleSubmit}
        style={{
          display: showMe ? "block" : "none",
        }}
      >
        <fieldset>
          <input
            type="text"
            className="textfield"
            placeholder="Search here..."
            onChange={(event) => setTitle(event.target.value)}
          />
          <button type="submit" className="search-btn">
            <span className="submit-btn lnr lnr-magnifier"></span>
          </button>
        </fieldset>
      </form>
      <div className="d-none">
        <SearchList title={title} />
      </div>
    </div>
  );
};

export default Navigation;

const NavItem = ({ url = "/", label = "" }) => {
  return <Link to={url}>{label}</Link>;
};
