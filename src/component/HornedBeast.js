import React from "react";
import Card from "react-bootstrap/Card";

class HornedBeast extends React.Component {

  constructor (props){
    super(props)
    this.state = {
    value : 0,
    }
  }

  upDateCounter = () => {
    this.setState({
      value: this.state.value + 1,
    });
  };

  renderModel = () => {
    this.props.renderModel(this.props);
    this.upDateCounter();
  };

  render() {
    return ( 
        <div style={{ maxWidth: "300px", width: "300px", flex: 1, flexBasis: '20%', margin: '10px' }}>
        <Card bg="secondary" text="white" className="text-center p-3" style={{ width: "100%", height:'500px'}}>
          <Card.Img style={{ maxHeight:'350px'}}
            variant="top"
            src={this.props.images}
            alt={this.props.title}
            onClick={this.renderModel}
          />
          <Card.Body>
            <Card.Title> {this.props.title} </Card.Title>
            <Card.Text> ❤️ = {this.state.value} </Card.Text>
            <Card.Text> {this.props.description} </Card.Text>
          </Card.Body>
        </Card>
        </div>
    );
  }
}

export default HornedBeast;
