import React, { Component } from 'react';
import * as BS from 'react-bootstrap';
import TableRow from './table_row'

class Table extends Component {
    // don't need constructor if we don't need this.props in constructor
    renderMembers(member) {
        return <TableRow 
                    key={member.district}
                    firstName={member.firstName}
                    lastName={member.lastName}
                    district={member.district}
                />
    }

    render() {
        const { members } = this.props
        return (
            <div>
                <h1>Select Your Council Member</h1>                
                    <BS.Table striped bordered hover responsive>
                        <thead>
                            <tr>                            
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>District</th>
                            </tr>                    
                        </thead>
                        <tbody>
                            {members.map(this.renderMembers)}                                       
                        </tbody>
                    </BS.Table>
            </div>
        )
    }
}

export default Table;