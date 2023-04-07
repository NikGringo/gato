const React = require("react");
const Table = require("../components/table.jsx");
const { classes } = require("../resources/classes");

function Main() {    
    const columns = ["Номер", "Время", "Дисциплина", "Кабинет"]

    return (
        <>
            <h2 class="m-3">3 курс 2 сессия</h2>
            <Table data={classes} columns={columns}/>
        </>
    )
}

module.exports = Main;