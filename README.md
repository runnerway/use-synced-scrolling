# use-synced-scrolling

> React hook for synced element scrolling

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Features

- Small size and no dependencies
- Support for dynamic component

## Usage

```jsx
import { useSyncedScrolling } from "use-synced-scrolling";

function Example() {
  const syncedScrolling = useSyncedScrolling();
  return (
    <main>
      <div {...syncedScrolling}>
        <div>{text}</div>
      </div>
      <div {...syncedScrolling}>
        <div>{text}</div>
      </div>
    </main>
  );
}
```

## License

MIT © [runnerway](https://github.com/runnerway)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
