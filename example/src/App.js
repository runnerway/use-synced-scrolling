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
        <ScrollableContent {...{ syncedScrolling }} />
        <ScrollableContent {...{ syncedScrolling }} />
        {checked && <ScrollableContent {...{ syncedScrolling }} />}
      </div>
    </div>
  );
}

const ScrollableContent = ({ syncedScrolling }) => (
  <div className="scrollable" id={Math.random()} {...syncedScrolling}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed
    nunc viverra, bibendum orci in, convallis purus. Duis vitae dapibus urna,
    sit amet finibus nulla. Nam mollis interdum mi. Integer pulvinar velit vitae
    quam aliquet, sed vulputate arcu feugiat. Suspendisse potenti. Ut posuere
    egestas eleifend. Fusce porta mollis eros, sagittis porta ex egestas ac. Sed
    dictum rhoncus nunc sit amet bibendum. Praesent mauris velit, lacinia a
    rutrum sed, fermentum eget eros. Donec id tempor magna, a tristique orci.
    Nullam arcu quam, dapibus ut elit et, aliquet aliquet ipsum. Curabitur risus
    felis, finibus in dignissim non, tempus in quam. Aliquam iaculis bibendum
    lacus, nec maximus tellus elementum eget. Phasellus eu ex ac ligula
    facilisis tempor ut ut nibh. Ut vulputate leo massa, quis faucibus nisi
    pretium sed. Suspendisse id pharetra urna. Nunc pulvinar urna ac dui
    lobortis, vel ultricies diam molestie. Pellentesque molestie nunc non nibh
    consequat, nec viverra arcu iaculis. Phasellus non blandit massa, vitae
    rutrum eros. Nunc fringilla, ante non vulputate dapibus, nulla mauris
    fermentum quam, at consectetur velit ex at libero. Pellentesque imperdiet
    vel elit eu fermentum. Quisque tristique porttitor justo, ac rhoncus est
    aliquam eu. Quisque nec suscipit arcu, vel tempus arcu. Donec a faucibus
    est, vitae vehicula dolor. Nullam id lacinia arcu. Donec eget sapien magna.
    Nunc odio arcu, semper at urna vel, molestie posuere nunc. Fusce laoreet
    diam neque, pretium convallis enim euismod nec. Nunc mi odio, sagittis non
    nisi quis, semper eleifend ex. Vestibulum vel turpis placerat, consectetur
    nibh sed, facilisis ex. Nam eget mauris at odio consectetur pulvinar. Donec
    dolor turpis, bibendum rutrum varius eu, iaculis in quam. Mauris mollis,
    nisl eget maximus consequat, massa elit rutrum libero, at dignissim enim
    eros eu odio. Cras in dapibus nulla. Nulla viverra auctor ipsum, eget
    euismod ipsum auctor ut. Pellentesque habitant morbi tristique senectus et
    netus et malesuada fames ac turpis egestas. Proin vel diam urna. Integer
    porttitor leo quis nunc ornare cursus. Praesent consequat et quam nec
    condimentum. Suspendisse porttitor dignissim urna, non scelerisque metus
    efficitur et. Phasellus pretium, mi vel finibus tristique, magna nibh
    ultricies justo, consectetur egestas libero ipsum in enim. Mauris pharetra
    imperdiet nisi. Duis eget enim lectus. Vestibulum ante ipsum primis in
    faucibus orci luctus et ultrices posuere cubilia curae; Ut nec magna id nunc
    venenatis ultricies. In quis sodales augue. Cras in ligula leo. Integer id
    turpis dolor. Nullam volutpat convallis libero ut egestas. Fusce pharetra
    volutpat luctus. Nam congue molestie aliquam. Sed suscipit mauris sit amet
    rutrum dictum. Duis eu lectus in ipsum congue euismod. Mauris ullamcorper a
    tellus id tempor. Nullam nulla risus, dictum ac orci sit amet, euismod
    venenatis magna. In efficitur leo nec accumsan ornare. Nam rhoncus
    pellentesque elit iaculis blandit. Proin et sollicitudin leo. Fusce suscipit
    placerat leo, at suscipit dolor aliquet et.
  </div>
);
