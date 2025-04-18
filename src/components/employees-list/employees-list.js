import EmployeesListItem from "../employees-list-item/employees-list-item";
import { Component } from 'react';

import './employees-list.css';

class EmployeesList extends Component {
    render() {
        const { data } = this.props
        const elemets = data.map(item => {
            const { id, ...itemProps } = item

            return (
                <EmployeesListItem key={id} {...itemProps} />
            )
        })
        return (
            <ul className="app-list list-group">
                {elemets}
            </ul>
        )
    }
}


export default EmployeesList;