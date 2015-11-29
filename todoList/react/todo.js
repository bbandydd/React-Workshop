/** @jsx React.DOM */

var TodoApp = React.createClass({
  getInitialState: function(){
    return { items: [], text: "" };
  },
  handleAdd: function(){
    var newItems = this.state.items.concat(this.state.text);

    this.setState({text: ""});
    this.setState({items: newItems});
  },
  handleRemove: function(i){
    var newItems = this.state.items;
    newItems.splice(i, 1);

    this.setState({items: newItems});
  },
  handleChange: function(e){
    this.setState({text: e.target.value});
  },
  render: function(){
    return (
      <div>
        <div className="container-fluid">
          <div className="form form-group col-md-10 center-block">
            <input type="text" value={this.state.text} onChange={this.handleChange} className="form-control input-lg" placeholder="待辦事項" />
          </div>
          <div className="form form-group col-md-2 center-block">
            <button className="btn btn-primary btn-lg btn-block" onClick={this.handleAdd}>新增</button>
          </div>
        </div>
        <TodoList items={this.state.items} onItemRemove={this.handleRemove}/>
      </div>
    )
  }
});

var TodoList = React.createClass({
  render: function(){

    var createItem = this.props.items.map(function(item, i){
      return (
        <li className="list-group-item todolist">
          <div className="form col-md-10">
            {item}
          </div>
          <div class="form col-md-1">
            <button className="btn btn-danger pull-right todo_delete" onClick={this.props.onItemRemove.bind(this, i)}></button>
          </div>
        </li>
      )
    }.bind(this));

    return (
      <ul className="list-group">
        { createItem }
      </ul>
    )
  }
});

React.render(
  <TodoApp />,
  document.getElementById('content')
);