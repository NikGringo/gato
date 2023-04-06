const React = require("react");
const Cla = require("../resources/classes");

function Table(props) {
    const columns = ["Номер", "Время", "Дисциплина", "Кабинет"]
    const data = [
        { title: "The last of us", duration: "01:15", rait: "4.5" },
        { title: "Wensday", duration: "01:07", rait: "5" },
        { title: "Ваша честь", duration: "01:11", rait: "4.7" },
    ]
    const classes = [
        {
            day: "Пятница 07.04.2023",
            classes: [
                {
                    number: 1,
                    time: "08:30 - 10:00",
                    name: "-",
                    cabinet: ""
                },
                {
                    number: 2,
                    time: "10:10 - 11:40",
                    name: "Исследование операций (лаб)",
                    cabinet: "28"
                },
                {
                    number: 3,
                    time: "12:10 - 13:40",
                    name: "Исследование операций (лаб)",
                    cabinet: "28"
                },
                {
                    number: 4,
                    time: "14:00 - 15:30",
                    name: "МСАД (консультация)",
                    cabinet: "1"
                },
                {
                    number: 5,
                    time: "15:40 - 17:10",
                    name: "-",
                    cabinet: ""
                },
                {
                    number: 6,
                    time: "17:20 - 18:30",
                    name: "-",
                    cabinet: ""
                },
                {
                    number: 7,
                    time: "18:30 - 20:00",
                    name: "-",
                    cabinet: ""
                },
                {
                    number: 8,
                    time: "20:10 - 21:40",
                    name: "-",
                    cabinet: ""
                },
            ]
        },
        {
            day: "Понедельник 10.04.2023",
            classes: [
                {
                    number: 1,
                    time: "08:30 - 10:00",
                    name: "-",
                    cabinet: ""
                },
                {
                    number: 2,
                    time: "10:10 - 11:40",
                    name: "-",
                    cabinet: ""
                },
                {
                    number: 3,
                    time: "12:10 - 13:40",
                    name: "-",
                    cabinet: ""
                },
                {
                    number: 4,
                    time: "14:00 - 15:30",
                    name: "МСАД (экзамен)",
                    cabinet: "1"
                },
                {
                    number: 5,
                    time: "15:40 - 17:10",
                    name: "Исследование операций (лаб)",
                    cabinet: "7"
                },
                {
                    number: 6,
                    time: "17:20 - 18:30",
                    name: "Исследование операций (лаб)",
                    cabinet: "7"
                },
                {
                    number: 7,
                    time: "18:30 - 20:00",
                    name: "-",
                    cabinet: ""
                },
                {
                    number: 8,
                    time: "20:10 - 21:40",
                    name: "-",
                    cabinet: ""
                },
            ]
        },
        {
            day: "Вторник 11.04.2023",
            classes: [
                {
                    number: 1,
                    time: "08:30 - 10:00",
                    name: "Базы данных (лаба)",
                    cabinet: "29"
                },
                {
                    number: 2,
                    time: "10:10 - 11:40",
                    name: "Базы данных (лаба)",
                    cabinet: "29"
                },
                {
                    number: 3,
                    time: "12:10 - 13:40",
                    name: "Базы данных (лаба)",
                    cabinet: "29"
                },
                {
                    number: 4,
                    time: "14:00 - 15:30",
                    name: "Базы данных (лаба)",
                    cabinet: "29"
                },
                {
                    number: 5,
                    time: "15:40 - 17:10",
                    name: "Базы данных (КСР, диф. зачет)",
                    cabinet: "29"
                },
                {
                    number: 6,
                    time: "17:20 - 18:30",
                    name: "-",
                    cabinet: ""
                },
                {
                    number: 7,
                    time: "18:30 - 20:00",
                    name: "-",
                    cabinet: ""
                },
                {
                    number: 8,
                    time: "20:10 - 21:40",
                    name: "-",
                    cabinet: ""
                },
            ]
        },
    ]
    return (
        <div class="m-3">
            {classes.map(item =>
                <>
                    <h2>{item.day}</h2>
                    <table class="table table-striped" style={{ width: '50vw' }} >
                        <thead class="table table-dark">
                            <tr>
                                {columns.map(x => <th>{x}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {item.classes.map((x) => <tr>
                                <td>{x.number}</td>
                                <td>{x.time}</td>
                                <td>{x.name}</td>
                                <td>{x.cabinet}</td>
                            </tr>)}
                        </tbody>
                    </table>
                </>)
            }
        </div>
    )
}

module.exports = Table;