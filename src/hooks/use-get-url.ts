import { useLocation } from "react-router-dom";

const useGetUrlQuery = () => {
  const { search } = useLocation();

  const removeUrlQuery = (flag: string) => {
    const url = new URL(window.location.href);
    url.searchParams.delete(flag);
    window.history.pushState({}, "", url);
  };

  return {
    urlQuery: new URLSearchParams(search),
    removeUrlQuery,
  };
};

export default useGetUrlQuery;
