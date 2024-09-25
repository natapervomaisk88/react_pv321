import React from "react";
import TodoList from "./TodoList";

export default class Todo extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
        items: [],
        title: "",
        description: "",
        tags: "",
    };
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleChangeTags = this.handleChangeTags.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render() {
    return (
      <>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <input id="new-todo-title" onChange={this.handleChangeTitle} value={this.state.title} placeholder="title"/><br />
          <input id="new-todo-description" onChange={this.handleChangeDescription} value={this.state.description} placeholder="description"/><br />
          <input id="new-todo-tags" onChange={this.handleChangeTags} value={this.state.tags} placeholder="tags"/><br />
          <button>Add # {this.state.items.length + 1}</button>
        </form>
      </>
    );
  }
  handleChangeTitle() {
    this.setState({ title: document.querySelector<any>("#new-todo-title")!.value });
  }
  handleChangeDescription() {
    this.setState({ description: document.querySelector<any>("#new-todo-description")!.value });
  }
  handleChangeTags() {
    this.setState({ tags: document.querySelector<any>("#new-todo-tags")!.value });
  }
  handleSubmit(e: any) {
    e.preventDefault();
    if (this.state.title.length === 0) return;
    const newItem = {
      id: Date.now(),
      title: this.state.title,
      description: this.state.description,
      tags: this.state.tags,
    };
    this.setState((state: any) => ({
      items: state.items.concat(newItem),
      title: "",
      description: "",
      tags: "",
    }));
  }
}
