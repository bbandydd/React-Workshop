/** @jsx React.DOM */
var Hello = React.createClass({
    render: function(){
        return (
            <div>
                Hello {this.props.name}!
            </div>
        )
    }
});

React.render(
    <Hello name="Andy" />,
    document.getElementById("content")
)