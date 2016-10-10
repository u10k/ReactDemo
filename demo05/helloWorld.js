/**
 * Created by U10K on 2016/10/10.
 */
//必须大写，如果变量不是大写，在渲染的时候不回分行
var Hello=React.createClass({
    render:function(){
        return (
            <ol>
                {
                    React.Children.map(this.props.children, function (child) {
                        return <li>{child}</li>;
                    })
                }
            </ol>
        );
    }
});

ReactDOM.render(
    <Hello>
        <span>HELLO</span>
        <span>WORLD!</span>
    </Hello>,
    document.getElementById("example")
);