import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as BS from 'react-bootstrap';
// import TableRow from './table_row'
import { selectMember } from '../actions/index'

class Table extends Component {    
    
    renderMembers = (member) => {        
        return (
            <tr 
                key={member.district}
                onClick={() => this.props.selectMember(member)}>
            <td>
                {member.firstName}
            </td>
            <td>
                {member.lastName}
            </td>
            <td>
                {member.district}
            </td>      
            </tr>
        )
    }
     
    render() {
        const { members } = this.props
        return (
            <div>
                <h1>Select Your Council Member</h1>                
                    <BS.Table striped condensed bordered hover responsive>
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

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectMember}, dispatch)
}


export default connect(null, mapDispatchToProps)(Table);