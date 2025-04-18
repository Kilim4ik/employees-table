import { Component } from "react";
import "./app-filter.css";

class AppFilter extends Component {
  buttons = [
    { name: "all", text: "Всі співробітники" },
    { name: "rise", text: "На підвищення" },
    { name: "moreThen1000", text: "З/П більше 1000$" },
  ];

  render() {
    const { filter, onFilterSelect } = this.props;

    return (
      <div className="btn-group">
        {this.buttons.map(({ name, text }) => (
          <button
            key={name}
            type="button"
            className={`btn ${
              filter === name ? "btn-light" : "btn-outline-light"
            }`}
            onClick={() => onFilterSelect(name)}
          >
            {text}
          </button>
        ))}
      </div>
    );
  }
}

export default AppFilter;
