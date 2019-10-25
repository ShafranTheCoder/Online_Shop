import store from "../../store";
import { debounce } from "throttle-debounce";
import objectFitImages from "object-fit-images";

const WINDOW_RESIZE = "COMMON/WINDOW_RESIZE";
const WINDOW_SCROLL = "COMMON/WINDOW_SCROLL";

const initialState = {
  windowWidth: window.innerWidth,
  windowHeight: window.innerHeight,
  windowScrollTop: window.scrollY,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case WINDOW_RESIZE:
      return { ...state, windowWidth: payload.windowWidth };

    case WINDOW_SCROLL:
      return { ...state, windowScrollTop: payload.scrollTop };

    default:
      return state;
  }
};

// Actions
const windowResize = (windowWidth, windowHeight) => ({
  type: WINDOW_RESIZE,
  payload: { windowWidth, windowHeight },
});

const windowScroll = scrollTop => ({
  type: WINDOW_SCROLL,
  payload: { scrollTop },
});

// Common handlers
function handleWindowResize(event) {
  store.dispatch(windowResize(window.innerWidth, window.innerHeight));
}

function handleWindowScroll(event) {
  store.dispatch(windowScroll(window.scrollY));
}

function handleDOMLoaded(event) {
  // object-fit polyfill
  objectFitImages();
}

window.addEventListener("resize", debounce(100, handleWindowResize));
window.addEventListener("scroll", debounce(100, handleWindowScroll));
window.addEventListener("DOMContentLoaded", handleDOMLoaded);

export { reducer };
