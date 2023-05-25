import { useCallback, useEffect, useMemo, useState } from "react";
import { Note } from "../models/note";
import { ApiRepository } from "../services/api.repository";
import { consoleError } from "../services/errors";

export function useNotes() {
  const [notes, setNotes] = useState<Note[]>([]);
  const noteUrl = "http://localhost:3000/notes/";

  const repo: ApiRepository<Note> = useMemo(
    () => new ApiRepository<Note>(noteUrl),
    []
  );

  const handleLoad = useCallback(async () => {
    const loadedNotes = await repo.getAll();
    setNotes(loadedNotes);
  }, [repo]);

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  const handleAdd = async (note: Omit<Note, "id">) => {
    try {
      const newNote = await repo.create(note);
      setNotes([...notes, newNote]);
    } catch (error) {
      consoleError(error);
    }
  };

  const handleUpdate = async (note: Note) => {
    try {
      const updatedNote = await repo.update(note.id, note);
      setNotes(notes.map((item) => (item.id === note.id ? updatedNote : item)));
    } catch (error) {
      consoleError(error);
    }
  };

  const handleDelete = async (note: Note) => {
    try {
      await repo.delete(note.id);
      setNotes(notes.filter((item) => item.id !== note.id));
    } catch (error) {
      consoleError(error);
    }
  };

  return {
    notes,
    handleAdd,
    handleUpdate,
    handleDelete,
  };
}
