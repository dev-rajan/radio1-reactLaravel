import useFetch from "../../../api/useFetch";
import { Link } from "react-router-dom";

const TopNav = () => {
  const {
    data: menu,
    error,
    isPending,
  } = useFetch("https://www.uniquefm.com.np/api/get-all-static-page-data");

  return (
    <div className="navigation_box tops">
      <ul>
        <li>
          <MenuItem className="home-text" url="/" title="Home" label="Home" />
        </li>
        {isPending && <></>}
        {error && <div>{error}</div>}

        {menu &&
          menu
            .map((c) => (
              <li key={c.id}>
                <Link to={`/programSchedules`}>{c.title}</Link>
              </li>
            ))
            .slice(0, 1)}
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
            {menu && menu.map((c) => c.title).slice(1, 2)}
          </a>
          <ul className="dropdown-menu">
            <MenuItem
              url={`/newsList/${menu && menu.id}`}
              title="Background"
              label="Background"
            />
            <MenuItem
              url={`/newsList/${menu && menu.id}`}
              title="History"
              label="History"
            />
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
                <MenuItem
                  url={`/newsList/${menu && menu.id}`}
                  title="Background"
                  label="Submenu 01 here"
                />
                <MenuItem
                  url={`/newsList/${menu && menu.id}`}
                  title="History"
                  label="Submenu 02 here"
                />
                <MenuItem
                  url={`/newsList/${menu && menu.id}`}
                  title="Mission"
                  label="Submenu 03 here"
                />

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
                    <MenuItem
                      url={`/newsList/${menu && menu.id}`}
                      title="Background"
                      label="Submenu 01 here"
                    />
                    <MenuItem
                      url={`/newsList/${menu && menu.id}`}
                      title="History"
                      label="Submenu 02 here"
                    />
                    <MenuItem
                      url={`/newsList/${menu && menu.id}`}
                      title="Mission"
                      label="Submenu 03 here"
                    />
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        {menu &&
          menu
            .map((c) => (
              <li key={c.id}>
                <Link to={`/newsList/${c.id}`}>
                  {c.title}
                </Link>
              </li>
            ))
            .slice(2, 3)}
        {menu &&
          menu
            .map((c) => (
              <li key={c.id}>
                <Link to={`/newsList/${c.id}`}>
                  {c.title}
                </Link>
              </li>
            ))
            .slice(3, 4)}
        {menu &&
          menu
            .map((c) => (
              <li key={c.id}>
                <Link to={`/newsList/${c.id}`}>
                  {c.title}
                </Link>
              </li>
            ))
            .slice(4, 5)}
        <li>
          <MenuItem url="/contact" title="Contact" label="Contact" />
        </li>
        {/* <li>
          <Link to={`/programSchedules`}>
            {menu.title}
          </Link>
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
            {menu.title}
          </a>
          <ul className="dropdown-menu">
            <MenuItem url={`/newsList/${id}`} title="Background" label="Background" />
            <MenuItem url={`/newsList/${id}`} title="History" label="History" />
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
                <MenuItem
                  url={`/newsList/${id}`}
                  title="Background"
                  label="Submenu 01 here"
                />
                <MenuItem
                  url={`/newsList/${id}`}
                  title="History"
                  label="Submenu 02 here"
                />
                <MenuItem
                  url={`/newsList/${id}`}
                  title="Mission"
                  label="Submenu 03 here"
                />

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
                    <MenuItem
                      url={`/newsList/${id}`}
                      title="Background"
                      label="Submenu 01 here"
                    />
                    <MenuItem
                      url={`/newsList/${id}`}
                      title="History"
                      label="Submenu 02 here"
                    />
                    <MenuItem
                      url={`/newsList/${id}`}
                      title="Mission"
                      label="Submenu 03 here"
                    />
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <MenuItem
          url="/programSchedules"
          title="Programme Schedule"
          label="programme schedule"
        />
        <MenuItem url={`/newsList/${id}`} title="Podcasts" label="Podcasts" />
        <MenuItem
          url={`/newsList/${id}`}
          title="Advertisements"
          label="Advertisements"
        />

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
            Our Team
          </a>
          <ul className="dropdown-menu">
            <MenuItem
              url="/radioPresenters"
              title="Radio Presenters"
              label="Radio Presenters"
            />
            <MenuItem
              url={`/newsList/${id}`}
              title="Management Team"
              label="Management Team"
            />
            <MenuItem
              url={`/newsList/${id}`}
              title="Technical Team"
              label="Technical Team"
            />
          </ul>
        </li>
        <MenuItem className="live-btn" url="/live" title="Live" label="Live" /> */}
      </ul>
    </div>
  );
};

export default TopNav;

const MenuItem = ({ url = "/", label = "", title = "" }) => {
  return (
    <Link to={url}>
      {label}
    </Link>
  );
};
