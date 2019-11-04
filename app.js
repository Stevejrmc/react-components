// var Bread = () => (<li>Bread</li>);
// var Milk = () => (<li>Milk</li>);
// var GroceryListItem = props => <li>{ props.item }</li>;

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hovering: false
    }
  }

  hovering() {
    this.setState({
      hovering: !this.state.hovering
    });
  }


  render() {
    var style = {
      fontWeight: this.state.hovering ? 'bold' : 'normal'
    };

    return (
      <li style={style} onMouseEnter={this.hovering.bind(this)}>{this.props.item}</li>
    )
  }
}

var GroceryList = props => (
  <ul>
    { props.items.map(item =>

  <GroceryListItem item={item} key={item}/>

    )}
  </ul>
);

var App = () => (
  <GroceryList items={['Bread', 'Milk']}/>
);

var root = document.querySelector('#app');
ReactDOM.render(<App/>, root);
