import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useEffect } from 'react';

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    editorProps: {
      attributes: {
        class: 'prose prose-zinc prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none',
      },
    },
    onCreate: ({ editor }) => {
      try {
        const content = JSON.parse(window.localStorage.getItem('content'));
        editor.commands.setContent(content);
      } catch (e) {}
    },
    onUpdate: ({ editor }) => {
      const json = editor.getJSON();
      window.localStorage.setItem('content', JSON.stringify(json));
    },
  });

  return <EditorContent editor={editor} />;
};

export default Tiptap;
