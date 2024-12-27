"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import UnderLine from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import { MenuBar } from "./menu-bar";
import { cn } from "@/lib/utils";

type EditorProps = {
  value: string;
  onChange?: (value: string) => void;
  className?: string;
};

export const Editor = ({ value, onChange, className }: EditorProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: {
          HTMLAttributes: {
            class: "list-disc pl4",
          },
        },
        orderedList: {
          HTMLAttributes: {
            class: "list-decimal pl4",
          },
        },
      }),
      UnderLine,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    content: value,
    editorProps: {
      attributes: {
        class: "focus:outline-none h-full p-4",
      },
    },
    onCreate({ editor }) {
      onChange?.(editor.getHTML());
    },
    onUpdate({ editor }) {
      onChange?.(editor.getHTML());
    },
    autofocus: false,
  });

  return (
    <div
      className={cn(
        "bg-background border border-muted rounded-2xl w-full flex flex-col",
        className
      )}
    >
      <MenuBar editor={editor} />
      <div className="h-full [&>div]:h-full flex flex-col overflow-y-auto">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};