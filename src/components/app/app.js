import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import { Component } from "react";

import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      filter: "all",
      searchingKey: "",
      data: [
        { name: "John C.", salary: 800, increase: false, rise: true, id: 1 },
        { name: "Alex M.", salary: 3000, increase: true, rise: false, id: 2 },
        { name: "Carl W.", salary: 5000, increase: false, rise: false, id: 3 },
      ],
    };
  }

  filterEmloyees(items, filter) {
    switch (filter) {
      case "rise":
        return items.filter((item) => item.rise);
      case "moreThen1000":
        return items.filter((item) => item.salary >= 1000);
      default:
        return items;
    }
  }
  searchEmloyees(items) {
    const key = this.state.searchingKey.toLowerCase().trim();
    if (!key) return items;
    return items.filter(({ name, ...rest }) =>
      name.toLowerCase().includes(key)
    );
  }
  deleteEmployee = (id) => {
    return this.state.data.filter((elem) => elem.id !== id);
  };
  onDeleteEmployee = (id) => {
    this.setState({ data: this.deleteEmployee(id) });
  };
  onFilterSelect = (filter) => {
    this.setState({ filter });
  };

  onSearchingKeyChange = (searchingKey) => {
    this.setState({ searchingKey });
  };
  onToggleIncrease = (id) => {
    this.setState(({ data }) => ({
      data: data.map((employee) => {
        if (employee.id === id) {
          return { ...employee, increase: !employee.increase };
        }
        return employee;
      }),
    }));
  };
  onToggleRise = (id) => {
    this.setState(({ data }) => ({
      data: data.map((employee) => {
        if (employee.id === id) {
          return { ...employee, rise: !employee.rise };
        }
        return employee;
      }),
    }));
  };

  render() {
    const { data, filter } = this.state;

    const employees = data.length;
    const increase = data.filter((elem) => elem.increase).length;
    const filteredEmpolyees = this.searchEmloyees(
      this.filterEmloyees(data, filter)
    );
    return (
      <div className="app">
        <AppInfo employees={employees} increase={increase} />
        <div className="search-panel">
          <SearchPanel onSearchingKeyChange={this.onSearchingKeyChange} />
          <AppFilter onFilterSelect={this.onFilterSelect} filter={filter} />
        </div>
        <EmployeesList
          data={filteredEmpolyees}
          onDeleteEmployee={this.onDeleteEmployee}
          onToggleIncrease={this.onToggleIncrease}
          onToggleRise={this.onToggleRise}
        />
        <EmployeesAddForm />
      </div>
    );
  }
}
export default App;
