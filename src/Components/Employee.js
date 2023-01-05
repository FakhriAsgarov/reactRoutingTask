import React, { Component } from 'react'

export default class Employee extends Component {
  render() {
    return (
      <>
                <tr>
                <td>{this.props.id}</td>
                <td>{this.props.name}</td>
                <td>{this.props.department}</td>
                <td>{this.props.role}</td>
                </tr>
                
      </>
    )
  }
}
