// import { render } from '@testing-library/react'
import React from "react";
import Card from "./app/card.jsx";
import Title from "./app/page_title.jsx";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.member = [];
    this.state = {
      list: [],
      members: [],
      erro: null,
    };
  }

  addToList = (info) => {
    this.state.list.push(info); //verificar
    this.setState({ members: this.state.list }); //verificar se precisa de members realmente e se não é possivel extrair dados do this.state.list
    // console.log(this.state.list);
  };
  buildList = (data) => {
    // console.log("did mount3", data);

    for (let user of data) {
      let url = `https://api.github.com/users/${user.login}`;
      fetch(url)
        .then((response) => response.json())
        .then(this.addToList);
    }
  };
// como a api do github só permite 30 requisições a cada 1 minuto pelo o que entendi dos docs dela (https://developer.github.com/v3/search/#rate-limit)
// seria bom pensar em um jeito de colocar um setInterval / setTimeout para soltar as requesições em mais de 1 minuto
// ou seja 2 a cada 5 segundos para nunca dar o problema de não ter como usar sempre os dados
  componentDidMount = () => {
    // console.log("did mount");
    let url = "https://api.github.com/orgs/aws/members";
    fetch(url)
      .then((response) => response.json())
      .then(this.buildList)
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="App">
        <Title title="Titulo" />
        {this.state.list.length === 0 && <h2>Sem dados</h2>}
        {this.state.list.length > 0 &&
          this.state.list.map((item) => (
            <Card
              uAvatar={item.avatar_url}
              uNick={item.login}
              uName={item.name}
              uEmail={item.email}
              uBio={item.bio}
            />
          ))}
      </div>
    );
  }
}
