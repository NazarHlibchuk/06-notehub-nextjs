export type NoteTag = 'Todo' | 'Work' | 'Personal' | 'Meeting' | 'Shopping';

export interface Note {
  id: string;
  title: string;
  content: string;
  tag: NoteTag;
  createdAt: string;
  updatedAt: string;
}

export interface NoteFormData {
  title: string;
  content: string;
  tag: NoteTag;
}

export interface NoteFormValues {
  title: string;
  content: string;
  tag: NoteTag;
}

// Якщо не потрібно розділяти — видаляємо CreateNoteParams
// export interface CreateNoteParams {
//   title: string;
//   content: string;
//   tag: NoteTag;
// }

export interface UpdateNoteParams {
  title?: string;
  content?: string;
  tag?: NoteTag;
}
