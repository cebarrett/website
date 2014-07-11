/** @jsx React.DOM */
(function($) {

    var mockData = {
        "X_REAL_IP": "1.1.1.1",
        "User-Agent": "MSIE 6"
    };

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
                var item = <TableRowItem key={i} value={this.props.data[i]} />;
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

    React.renderComponent(
        <Application data={mockData} />,
        $("#container")[0]
    );

})(jQuery);
