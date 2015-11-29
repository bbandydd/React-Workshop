/** @jsx React.DOM */
var Hello = React.createClass({
    getInitialState: function(){
        return {opacity: 0.1, left: 0};
    },
    componentDidMount: function(){
        setInterval(function(){
            var opacity = this.state.opacity;
            opacity += 0.05;
            opacity = opacity >= 1.0 ? 1.0 : opacity;

            var left = this.state.left;
            left += 10;
            left = left >= screen.width ? 0 : left;

            this.setState({opacity: opacity, left: left});

        }.bind(this), 100);
    },
    render: function(){

        var style = {
            opacity: this.state.opacity,
            position: 'relative',
            left: this.state.left + 'px'
        };

        return (
            <div style={style}>
                Hello {this.props.name}!
            </div>
        )
    }
});

React.render(
    <Hello name="Andy" />,
    document.getElementById("content")
)