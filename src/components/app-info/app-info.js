import { Component } from "react";
import "./app-info.css";

class AppInfo extends Component {
  render() {
    const { increase, employees } = this.props;
    return (
      <div className="app-info">
        <h1>Облік співробітників в компанії</h1>
        <h2>Загальна кількість співробітників: {employees}</h2>
        <h2>Надійшли премії: {increase}</h2>
      </div>
    );
  }
}

export default AppInfo;
