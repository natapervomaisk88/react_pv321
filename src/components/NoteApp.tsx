import React, { Component } from 'react';

interface Note {
  id: number;
  title: string;
  description: string;
  tags: string[];
}

interface NoteAppState {
  notes: Note[];
  title: string;
  description: string;
  tags: string;
  filterTags: string;
  editingNoteId: number | null;
}

class NoteApp extends Component<{}, NoteAppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      notes: [],
      title: '',
      description: '',
      tags: '',
      filterTags: '',
      editingNoteId: null
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    this.setState({
        [e.target.name]: e.target.value
    } as unknown as Pick<NoteAppState, keyof NoteAppState>);
  };

  handleAddNote = () => {
    const { title, description, tags, notes } = this.state;
    const newNote: Note = {
      id: Date.now(),
      title,
      description,
      tags: tags.split(',').map(tag => tag.trim())
    };
    this.setState({
      notes: [...notes, newNote],
      title: '',
      description: '',
      tags: ''
    });
  };

  handleEditNote = (id: number) => {
    const noteToEdit = this.state.notes.find(note => note.id === id);
    if (noteToEdit) {
      this.setState({
        editingNoteId: id,
        title: noteToEdit.title,
        description: noteToEdit.description,
        tags: noteToEdit.tags.join(', ')
      });
    }
  };

  handleUpdateNote = () => {
    const { editingNoteId, notes, title, description, tags } = this.state;
    const updatedNotes = notes.map(note =>
      note.id === editingNoteId
        ? { ...note, title, description, tags: tags.split(',').map(tag => tag.trim()) }
        : note
    );
    this.setState({
      notes: updatedNotes,
      editingNoteId: null,
      title: '',
      description: '',
      tags: ''
    });
  };

  handleDeleteNote = (id: number) => {
    const updatedNotes = this.state.notes.filter(note => note.id !== id);
    this.setState({ notes: updatedNotes });
  };

  handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ filterTags: e.target.value });
  };

  getFilteredNotes = () => {
    const { notes, filterTags } = this.state;
    if (!filterTags) return notes;

    const filterTagArray = filterTags.split(',').map(tag => tag.trim());
    return notes.filter(note =>
      filterTagArray.every(tag => note.tags.includes(tag))
    );
  };

  render() {
    const { title, description, tags, filterTags, editingNoteId } = this.state;
    const filteredNotes = this.getFilteredNotes();

    return (
        <div className="note-app-container">
        <h1>Note List</h1>
      
        {/* Форма для додавання або редагування нотаток */}
        <div className="note-form">
          <div className="input-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Enter title"
              value={title}
              onChange={this.handleChange}
            />
          </div>
      
          <div className="input-group">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              placeholder="Enter description"
              value={description}
              onChange={this.handleChange}
            />
          </div>
      
          <div className="input-group">
            <label htmlFor="tags">Tags</label>
            <input
              type="text"
              name="tags"
              id="tags"
              placeholder="Comma-separated tags"
              value={tags}
              onChange={this.handleChange}
            />
          </div>
      
          {/* Кнопка для додавання або оновлення нотатки */}
          <div className="button-group">
            {editingNoteId ? (
              <button className="update-button" onClick={this.handleUpdateNote}>Update Note</button>
            ) : (
              <button className="add-button" onClick={this.handleAddNote}>Add Note</button>
            )}
          </div>
        </div>
      
        {/* Форма для фільтрації нотаток за тегами */}
        <div className="filter-section">
          <label htmlFor="filterTags">Filter by Tags</label>
          <input
            type="text"
            name="filterTags"
            id="filterTags"
            placeholder="Comma-separated tags"
            value={filterTags}
            onChange={this.handleFilterChange}
          />
        </div>
      
        {/* Список нотаток */}
        <div className="note-list">
          <ul>
            {filteredNotes.map(note => (
              <li key={note.id} className="note-item">
                <div className="note-header">
                  <h3>{note.title}</h3>
                </div>
                <div className="note-body">
                  <p>{note.description}</p>
                  <p className="note-tags">Tags: {note.tags.join(', ')}</p>
                </div>
                <div className="note-actions">
                  <button className="edit-button" onClick={() => this.handleEditNote(note.id)}>Edit</button>
                  <button className="delete-button" onClick={() => this.handleDeleteNote(note.id)}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default NoteApp;
