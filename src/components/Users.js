
import React, { Component } from 'react';
import User from './User';



class Users extends Component {

    state = {
        data: null
    }
  
    
    componentDidMount() {
  
        console.log("component did mount")
        fetch("/api/users")

        .then(response => {
            return response.json()
        })
        
        .then((data) => {
            console.log("fetched data", data)
            this.setState({data: data.users})
        })

        .catch((err)=> {
            console.log(err)
        })

    }
   
  
   render() {

    console.log("render do Users!")
   
        let componentsToRender;

        // Se houver estado quer dizer que houve fetch
        if(this.state.data) {
            componentsToRender = this.state.data.map(function (ele) {
                return (<User name={ele.name}/>)
            })
        }

        // Se o componente tiver props significa que veio de SSR

        else if (this.props.data) {
            componentsToRender = this.props.data.map(function (ele) {
                return (<User name={ele.name}/>)
            })
        }


        // console.log(dataParas)
        // console.log(Array.isArray(dataParas))
        
        console.log("users props", this.props.data)
        return (
            <div>
                <p>Users page !!!</p>
                {componentsToRender}
            </div>
        )
   }
    
}

export default Users;
