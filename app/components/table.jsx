const React = require("react");

const compareDate = (str) => {
    return (new Date(str.split(" ")[1].split(".").reverse()).getDate() >= new Date().getDate() && 
    new Date(str.split(" ")[1].split(".").reverse()).getMonth() >= new Date().getMonth()) || new Date(str.split(" ")[1].split(".").reverse()).getMonth() > new Date().getMonth()
}

function Table({columns, data}) {
    return (
        <div class="m-3">
            {data.filter(x => compareDate(x.day))
            .map((item, i) =>
                <>
                    <h2 key={item.day}>{item.day} ({item.classes.filter(x => x.name !== "-").length})</h2>
                    <table class="table table-striped" style={{ width: '50vw' }} key={i}>
                        <thead class="table table-dark">
                            <tr>
                                {columns.map(x => <th key={x}>{x}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {item.classes.map((x, i) => <tr style={{backgroundColor: x.name === "-" ? '' : 'lightgray'}} key={i}>
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