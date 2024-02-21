const React = require("react");
const { classes } = require("../resources/classes");
const Table = require("../components/table.jsx");
const Header = require("../components/header.jsx");
const DateCounter = require("../components/datecounter.jsx");

function Main() {    
    const columns = ["Номер", "Время", "Дисциплина", "Кабинет"]

    return (
        <>
            <DateCounter start='11.03.2024' end='31.03.2024'/>
            <Header text='4 курс 8 сессия'/>
            <Table data={classes} columns={columns}/>
        </>
    )
}

module.exports = Main;