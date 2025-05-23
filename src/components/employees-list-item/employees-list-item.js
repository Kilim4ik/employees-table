import "./employees-list-item.css";
import { Component } from "react";

class EmployeesListItem extends Component {
  render() {
    const {
      name,
      salary,
      increase,
      rise,
      onDeleteEmployee,
      onToggleIncrease,
      onToggleRise,
    } = this.props;

    let classNames = "list-group-item d-flex justify-content-between";
    if (increase) {
      classNames += " increase";
    }

    if (rise) {
      classNames += " like";
    }

    return (
      <li onDoubleClick={onToggleRise} className={classNames}>
        <span className="list-group-item-label">{name}</span>
        <input
          type="text"
          className="list-group-item-input"
          defaultValue={`${salary}`}
        />
        <div className="d-flex justify-content-center align-items-center">
          <button
            onClick={onToggleIncrease}
            type="button"
            className="btn-cookie btn-sm "
          >
            <i className="fas fa-cookie"></i>
          </button>

          <button
            type="button"
            onClick={onDeleteEmployee}
            className="btn-trash btn-sm "
          >
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }
}

export default EmployeesListItem;
