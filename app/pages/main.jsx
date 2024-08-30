const React = require("react");
const { classes } = require("../resources/classes");
const Table = require("../components/table.jsx");
const Header = require("../components/header.jsx");
const DateCounter = require("../components/datecounter.jsx");

function Main() {    
    const columns = ["Номер", "Время", "Дисциплина", "Кабинет"]

    return (
        <>
            <DateCounter start='14.10.2024' end='10.11.2024'/>
            <Header text='5 курс 9 сессия (с 14.10.2024)'/>
            <Table data={classes} columns={columns}/>
        </>
    )
}

module.exports = Main;