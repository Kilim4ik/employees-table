import { Component } from "react";
import "./search-panel.css";

class SearchPanel extends Component {
  render() {
    const { onSearchingKeyChange } = this.props;
    return (
      <input
        type="text"
        onChange={(e) => onSearchingKeyChange(e.target.value)}
        className="form-control search-input"
        placeholder="Знайти співробітника"
      />
    );
  }
}

export default SearchPanel;
