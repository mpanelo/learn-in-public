import { useCallback, useState } from 'react';
import { createEditor, Descendant, Editor, Element, Transforms } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import { CustomElement } from '../types/slate';

interface RenderElementProps {
  children: any;
  element: Element;
  attributes: {
    'data-slate-node': 'element';
  };
}

const App = () => {
  const [editor] = useState(() => withReact(createEditor()));

  const initialValue: CustomElement[] = [{ type: 'paragraph', children: [{ text: 'Hello, World!' }] }];
  const [value, setValue] = useState<Descendant[]>(initialValue);

  // Define a rendering function based on the element passed to `props`. We use
  // `useCallback` here to memoize the function for subsequent renders.
  const renderElement = useCallback((props) => {
    switch (props.element.type) {
      case 'code':
        return <CodeElement {...props} />;
      default:
        return <DefaultElement {...props} />;
    }
  }, []);

  return (
    <Slate editor={editor} value={value} onChange={setValue}>
      <Editable
        renderElement={renderElement}
        onKeyDown={(event) => {
          if (event.key === '`' && event.ctrlKey) {
            event.preventDefault();
            const [match] = Editor.nodes<Element>(editor, {
              match: (node) => {
                return Element.isElement(node) && node.type === 'code';
              },
            });
            Transforms.setNodes(
              editor,
              { type: match ? 'paragraph' : 'code' },
              { match: (n) => Editor.isBlock(editor, n) }
            );
          } else if (event.key === '&') {
            event.preventDefault();
            editor.insertText('and');
          }
        }}
      />
    </Slate>
  );
};

const CodeElement = (props: RenderElementProps) => {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  );
};

const DefaultElement = (props: RenderElementProps) => {
  return <p {...props.attributes}>{props.children}</p>;
};

export default App;
