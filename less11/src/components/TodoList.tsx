import React from "react";
import "./TodoList.css";

export default class TodoList extends React.Component<any> {
  render() {
    return (
      <div className="todo-list-container">
        {this.props.items.map((item: any) => {
          return <div key={item.id} className="todo-item">
            <span className="todo-item-id">id: {item.id}</span>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <div className="todo-item-tags-container">
              {item.tags.trim().split(/\W+/).map((tag: string) => {
                return <span className="todo-item-tag">#{tag}</span>
              })}
            </div>
          </div>
        })}
      </div>
    );
  }
}
