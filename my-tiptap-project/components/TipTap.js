import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    editorProps: {
      attributes: {
        class: 'prose prose-zinc prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none',
      },
    },
    content: localStorage.getItem('content'),
    onUpdate: ({ editor }) => {
      const json = editor.getJSON();
      localStorage.setItem('content', json);
    },
  });

  return <EditorContent editor={editor} />;
};

export default Tiptap;
