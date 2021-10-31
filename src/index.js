import { useCallback, useRef } from "react";

export const useSyncedScrolling = () => {
  const refs = useRef();

  refs.current = [];

  let lastScrollTop, lastScrollLeft;

  const onScroll = useCallback((e) => {
    const target = e.target;
    const { scrollTop, scrollLeft } = target;

    if (lastScrollTop != scrollTop || lastScrollLeft != scrollLeft) {
      lastScrollTop = scrollTop;
      lastScrollLeft = scrollLeft;

      for (let el of refs.current) {
        if (el !== target) {
          el.scrollTop = scrollTop;
          el.scrollLeft = scrollLeft;
        }
      }
    }
  }, []);

  return {
    onScroll,
    ref: (ref) => ref && refs.current.push(ref),
  };
};
