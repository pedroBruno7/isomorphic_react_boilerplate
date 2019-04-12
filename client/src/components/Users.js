import React from "react";
import User from './User';

class Users extends React.Component {
  state = {
    data: false
  };

  componentDidMount() {
    console.log('[componentDidMount!!!!!!!!!!!!!!]')
    fetch("/api/users")
      .then(response => {
        console.log('[fetch!!!!!!!!!!!!!!]');
        return response.json();
      })
      .then(data => {
        this.setState({ data: data.users });
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    console.log("render do Users!");

    let componentsToRender;

    // Se houver estado quer dizer que houve fetch
    if (this.state.data) {
      componentsToRender = this.state.data.map(function(ele, idx) {
        return <User key={idx} name={ele.name} />;
      });
    }

    // Se o componente tiver props significa que veio de SSR
    else if (this.props.data) {
      componentsToRender = this.props.data.map(function(ele, idx) {
        return <User key={idx} name={ele.name} />;
      });
    }

    // console.log(dataParas)
    // console.log(Array.isArray(dataParas))

    console.log("users props", this.props.data);
    return (
      <div>
        <p>Users page !!!</p>
        {componentsToRender}
      </div>
    );
  }
}

export default Users;
