import React, { useState } from 'react';
import { useSyncedScrolling } from 'use-synced-scrolling';
import './App.css';

const text =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae eleifend elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi ut orci a ex molestie scelerisque. Proin quis urna tincidunt, pharetra justo in, posuere dolor. Mauris placerat orci in nulla tempus, efficitur elementum mi vulputate. Ut accumsan sit amet sem vel cursus. Etiam eu magna diam. Donec vulputate tellus dui, vitae accumsan est efficitur id. Phasellus dapibus, magna non vehicula suscipit, nisl nulla lobortis neque, sed dapibus erat dolor et quam. Aenean laoreet, ante ac cursus fermentum, felis erat convallis erat, vel sagittis leo libero nec magna. Phasellus viverra feugiat ullamcorper. Duis volutpat suscipit nisi. Suspendisse interdum leo eu facilisis facilisis. Nullam vestibulum eu odio et finibus.';

export default function App() {
  return (
    <>
      <Example />
      <DynamicComponent />
    </>
  );
}

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

function DynamicComponent() {
  const [checked, setChecked] = useState(false);

  const syncedScrolling = useSyncedScrolling();

  return (
    <>
      <input onChange={() => setChecked((v) => !v)} checked={checked} type="checkbox" />
      <main>
        <div {...syncedScrolling}>
          <div>{text}</div>
        </div>
        <div {...syncedScrolling}>
          <div>{text}</div>
        </div>
        {checked && (
          <div {...syncedScrolling}>
            <div>{text}</div>
          </div>
        )}
      </main>
    </>
  );
}
