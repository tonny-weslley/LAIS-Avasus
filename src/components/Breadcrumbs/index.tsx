import useBreadcrumbs from "use-react-router-breadcrumbs";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPage } from "../../redux/Navbar/slice";
import { NavBreadcrumb } from '../styled-components/Navbar'

const BreadCrumbs = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const breadcrumbs = useBreadcrumbs();

  const handleSetPage = (event: any, page: string, redirect: string) => {
    event.preventDefault();
    dispatch(setPage(page));
    navigate(redirect);
  };

  return (
    <NavBreadcrumb>
      {breadcrumbs.map(({ match, key, breadcrumb }) => (
        <a key={key}
          onClick={(e) => {
            handleSetPage(e, key, match.pathname);
          }}
        >
          {breadcrumb} /
        </a>
      ))}
    </NavBreadcrumb>
  );
};

export default BreadCrumbs;
