import React, { useState } from "react";
import { useSyncedScrolling } from "use-synced-scrolling";
import "./App.css";

export default function App() {
  const syncedScrolling = useSyncedScrolling();
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <input
        onChange={() => setChecked((v) => !v)}
        checked={checked}
        type="checkbox"
      />
      <div className="container">
        <div className="scrollable" {...syncedScrolling}>
          <div className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sed nunc viverra, bibendum orci in, convallis purus.
            Duis vitae dapibus urna, sit amet finibus nulla. Nam mollis interdum
            mi. Integer pulvinar velit vitae quam aliquet, sed vulputate arcu
            feugiat. Suspendisse potenti. Ut posuere egestas eleifend. Fusce
            porta mollis eros, sagittis porta ex egestas ac. Sed dictum rhoncus
            nunc sit amet bibendum. Praesent mauris velit, lacinia a rutrum sed,
            fermentum eget eros. Donec id tempor magna, a tristique orci. Nullam
            arcu quam, dapibus ut elit et, aliquet aliquet ipsum. Curabitur
            risus felis, finibus in dignissim non, tempus in quam.
          </div>
        </div>
        <div className="scrollable" {...syncedScrolling}>
          <div className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sed nunc viverra, bibendum orci in, convallis purus.
            Duis vitae dapibus urna, sit amet finibus nulla. Nam mollis interdum
            mi. Integer pulvinar velit vitae quam aliquet, sed vulputate arcu
            feugiat. Suspendisse potenti. Ut posuere egestas eleifend. Fusce
            porta mollis eros, sagittis porta ex egestas ac. Sed dictum rhoncus
            nunc sit amet bibendum. Praesent mauris velit, lacinia a rutrum sed,
            fermentum eget eros. Donec id tempor magna, a tristique orci. Nullam
            arcu quam, dapibus ut elit et, aliquet aliquet ipsum. Curabitur
            risus felis, finibus in dignissim non, tempus in quam.
          </div>
        </div>
        {checked && (
          <div className="scrollable" {...syncedScrolling}>
            <div className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque sed nunc viverra, bibendum orci in, convallis purus.
              Duis vitae dapibus urna, sit amet finibus nulla. Nam mollis
              interdum mi. Integer pulvinar velit vitae quam aliquet, sed
              vulputate arcu feugiat. Suspendisse potenti. Ut posuere egestas
              eleifend. Fusce porta mollis eros, sagittis porta ex egestas ac.
              Sed dictum rhoncus nunc sit amet bibendum. Praesent mauris velit,
              lacinia a rutrum sed, fermentum eget eros. Donec id tempor magna,
              a tristique orci. Nullam arcu quam, dapibus ut elit et, aliquet
              aliquet ipsum. Curabitur risus felis, finibus in dignissim non,
              tempus in quam.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
