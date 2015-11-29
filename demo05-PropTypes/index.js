/** @jsx React.DOM */
var Hello = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired
    },
    getDefaultProps: function(){
        return {
            title: 'Hello'
        }
    }, 
    render: function(){
        return (
            <div>
                {this.props.title}, {this.props.name}!
            </div>
        )
    }
});

React.render(
    <Hello name={123} />,
    document.getElementById("content")
)