/** @jsx React.DOM */
var Hello = React.createClass({
    render: function(){

        var items = [];

        this.props.children.map(function(child){
            items.push(
                <li>
                    {child}
                </li>
            );
        });

        return (
            <ol>
                {items}
            </ol>
        )
    }
});

React.render(
    <Hello>
        <p>Hello</p>
        <p>World</p>
    </Hello>,
    document.getElementById("content")
)