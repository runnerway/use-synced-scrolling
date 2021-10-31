import { useCallback, useRef } from "react";

export const useSyncedScrolling = () => {
  const refs = useRef();

  refs.current = [];

  const onScroll = useCallback((e) => {
    const target = e.target;
    const { scrollTop, scrollLeft } = target;

    for (let el of refs.current) {
      if (el !== target) {
        el.scrollTop = scrollTop;
        el.scrollLeft = scrollLeft;
      }
    }
  }, []);

  return {
    onScroll,
    ref: (ref) => ref && refs.current.push(ref),
  };
};
