/** @jsx React.DOM */
var Input = React.createClass({
    getInitialState: function(){
        return {value: ""};
    },
    handleChange: function(event){
        this.setState({value: event.target.value});
    },
    render: function(){
        return (
            <div>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <p>{this.state.value}</p>
            </div>
        )
    }
});

React.render(
    <Input />,
    document.getElementById("content")
)