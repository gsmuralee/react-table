import React from 'react';
import './table.css'
import Api from '../api'

class Table extends React.Component{
    constructor(){
        super();
            this.state ={
                users : []
            };
    }

    componentWillMount(){
        Api.getUsers().then(allUsers => {
            let tableBody = allUsers.results.map((user, index) => {
                return (
                    <div className="resp-table-row" key={"user_"+index}>
                        <div className="table-body-cell">
                            {user.name.first} {user.name.last}
                        </div>
                        <div className="table-body-cell">
                            {user.email}
                        </div>
                        <div className="table-body-cell">
                            {user.gender}
                        </div>
                        <div className="table-body-cell">
                            {user.phone}
                        </div>
                    </div>
                )
            })
            this.setState ({
                users : tableBody
            });
        })
    }

    render(){
        return (
            
            <div id='resp-table'>
                <div id="resp-table-caption">
                    User details           
                </div>
                <div id="resp-table-header">
                    <div className="table-header-cell">
                        Name  
                    </div>
                    <div className="table-header-cell">
                        email
                    </div>
                    <div className="table-header-cell">
                        gender
                    </div>
                    <div className="table-header-cell">
                        phone
                    </div>
                </div>
                <div id="resp-table-body">
                    
                        {this.state.users}
               </div> 
                <div id="resp-table-footer">
                    <div className="table-footer-cell">
                        Footer 1
                    </div>
                        <div className="table-footer-cell">
                        Footer 2
                    </div>
                        <div className="table-footer-cell">
                        Footer 3
                    </div>
                    <div className="table-footer-cell">
                        Footer 4
                    </div>
                </div>               
            </div>
        )
    }
}

export default Table;