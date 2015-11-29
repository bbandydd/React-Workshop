/** @jsx React.DOM */
var Toeic = React.createClass({
    getInitialState: function(){
        return {items: []};
    },
    componentDidMount: function(){
        $.get(this.props.source, function(data){

            var list = [];

            data.map(function(objs){
                objs.WordList.map(function(obj){
                    list.push(
                        <li>
                            <h2>{obj.Eng_Word} - {obj.Ch_Word}</h2>
                            <p>{obj.Eng_Sentence}</p>
                            <p>{obj.Ch_Sentence}</p>
                        </li>
                    );
                });
            });

            this.setState({items: list});

        }.bind(this));
    },
    render: function(){
        return (
            <ul>
                {this.state.items}
            </ul>
        )
    }
});

React.render(
    <Toeic source="http://TOWNKEN.github.io/ToeicWordList/toeic.json"/>,
    document.getElementById("content")
)