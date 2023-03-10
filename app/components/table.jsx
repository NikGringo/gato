const React = require("react");

function Table(props) {
    const columns = ["Номер", "Название", "Продолжительность", "Рейтинг"]
    const data = [
        { title: "The last of us", duration: "01:15", rait: "4.5" },
        { title: "Wensday", duration: "01:07", rait: "5"  },
        { title: "Ваша честь", duration: "01:11", rait: "4.7"  },
    ]
    return (
        <div class="m-3">
            <table class="table table-striped">
                <thead class="table table-dark">
                    <tr>
                        {columns.map(x => <th>{x}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {data.map((x, i) => <tr>
                        <td>{i + 1}</td>
                        <td>{x.title}</td>
                        <td>{x.duration}</td>
                        <td>{x.rait}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}

module.exports = Table;