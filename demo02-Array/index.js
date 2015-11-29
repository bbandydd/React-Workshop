/** @jsx React.DOM */
var Hello = React.createClass({
    render: function(){

        var names = ['Alice', 'Emily', 'Kate'];
        var items = [];

        names.map(function(name){
            items.push(
                <div>
                    Hello, {name}!
                </div>
            );
        });

        return (
            <div>
                {items}
            </div>
        )
    }
});

React.render(
    <Hello />,
    document.getElementById("content")
)