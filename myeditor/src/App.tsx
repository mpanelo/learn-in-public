import React, { useState } from 'react';
import { createEditor, Descendant, CustomTypes } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import { CustomElement } from '../types/slate';

const App = () => {
  const [editor] = useState(() => withReact(createEditor()));

  const initialValue: CustomElement[] = [{ type: 'paragraph', children: [{ text: 'Hello, World!' }] }];
  const [value, setValue] = useState<Descendant[]>(initialValue);
  return (
    <Slate editor={editor} value={value} onChange={setValue}>
      <Editable />
    </Slate>
  );
};
export default App;
