const React = require("react");
const { classes } = require("../resources/classes");
const Table = require("../components/table.jsx");
const Header = require("../components/header.jsx");
const DateCounter = require("../components/datecounter.jsx");

function Main() {    
    const columns = ["Номер", "Время", "Дисциплина", "Кабинет"]

    return (
        <>
            <DateCounter start='13.11.2023' end='10.12.2023'/>
            <Header text='4 курс 1 сессия'/>
            <Table data={classes} columns={columns}/>
        </>
    )
}

module.exports = Main;