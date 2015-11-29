/** @jsx React.DOM */
var Hello = React.createClass({
    handleClick: function(){
        alert(this.refs.myInput.getDOMNode().value);
    },
    render: function(){
        return (
            <div>
                <input type="text" ref="myInput" />
                <button onClick={this.handleClick}>Click</button>
            </div>
        )
    }
});

React.render(
    <Hello />,
    document.getElementById("content")
)