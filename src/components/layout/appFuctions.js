let maxId = 1;

const createNote = (value) => {
  return {
    id: maxId++,
    label: value,
    important: false,
    done: false
  }
}

const toggleProperty = (arr, id, propName) => {
  const idx = arr.findIndex((el) => el.id === id);
  const oldNote = arr[idx];
  const newNote = {
    ...oldNote,
    [propName]: !oldNote[propName]
  }
  return [
    ...arr.slice(0, idx),
    newNote,
    ...arr.slice(idx + 1)
  ]
}

export { createNote, toggleProperty }