import {Component} from 'react'

class Index extends Component {
    render() {
        let { color, name, email, number, batch } = this.props;
  return (
    <div className={`cardcontainer ${color}`}>
       <h3>Evangadi INC.</h3>
       <p>Name: {name}</p>
       <p>Email:{email}</p>
       <p>Phone number: {number}</p>
       {batch && <p>batch: {batch}</p>}
    </div>
  );
  }
}

export default Index;