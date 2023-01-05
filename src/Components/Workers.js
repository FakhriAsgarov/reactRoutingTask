import React, { Component } from 'react'
import Employee from './Employee'
import {Table} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
export default class Workers extends Component {
    state = {
        data: [],
        value:'',
        arr:[]
    }
    
    componentDidMount() {

        fetch('https://5ea5ca472d86f00016b4626d.mockapi.io/brotherhood')
            .then(resp => resp.json())
            .then(data => this.setState({ data: data }))
    }

 

    render() {
        
        return (
            <>
        <input type="text" onChange={(e)=>{this.setState({value:e.target.value})}}/>
        <div class="btn-group" role="group" aria-label="Basic example">
        <button className="btn btn-success"  onClick={()=>{ let array=this.state.data.filter(worker=>worker.name===this.state.value)
      this.setState({arr:array})}}>Search for employee</button>
     <button className="btn btn-success" onClick={()=>{ let array=this.state.data.filter(worker=>worker.department===this.state.value);
this.setState({arr:array})}
}>Search for department</button>
        <button className="btn btn-success" onClick={()=>this.setState({arr:this.state.data})}>Show All Employees</button>
        </div>
        <Table>
            <thead>
                <tr className="table-dark">
                <th>ID</th>
                <th>NAME</th>
                <th>DEPARTMENT</th>
                <th>ROLE</th>
                </tr>
            </thead>
            <tbody>
                
                {
              this.state.arr.map(worker=>{
                   return <Employee key={worker.name} {...worker}/>
                })
                
            }
            </tbody>
            </Table>

     
            </>
)
    }


}

