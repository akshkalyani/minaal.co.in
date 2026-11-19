import { useEffect, useState } from "react";

/** useMediaQuery — live boolean for a CSS media query. */
const useMediaQuery = (query) => {
  const getMatch = () =>
    typeof window !== "undefined" && window.matchMedia
      ? window.matchMedia(query).matches
      : false;

  const [matches, setMatches] = useState(getMatch);

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);
    onChange();
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [query]);

  return matches;
};

// Keep in sync with the `max-width: 767px` blocks in styles/minaal.css
export const MOBILE_QUERY = "(max-width: 767px)";

/** useIsMobile — true when the phone layout from Reference/Minaal mobile applies. */
export const useIsMobile = () => useMediaQuery(MOBILE_QUERY);

export default useMediaQuery;
