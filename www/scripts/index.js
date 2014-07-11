/** @jsx React.DOM */
(function($) {

    var TableRowItem = React.createClass({
        render: function() {
            return (
                <tr><td>{this.props.key}</td><td>{this.props.value}</td></tr>
            );
        }
    });

    var TableItem = React.createClass({
        render: function() {
            var tableRowItems = [];
            for (i in this.props.data) {
                var item = <TableRowItem key={i} value={String(this.props.data[i])} />;
                tableRowItems.push(item);
            }
            return (
                <table>{tableRowItems}</table>
            );
        }
    });

    var Application = React.createClass({
        render: function() {
            return <TableItem data={this.props.data} />;
        }
    });

    // TODO: see "fetching from the server" here:
    // http://facebook.github.io/react/docs/tutorial.html
    $.getJSON("api", function(data) {
        React.renderComponent(
            <Application data={data} />,
            $("#container")[0]
        );
    });

})(jQuery);
