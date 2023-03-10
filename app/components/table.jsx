const React = require("react");

function Table(props) {
    const columns = ["№", "Название", "Продолжительность"]
    const data = [
        { title: "The last of us", duration: "01:30" },
        { title: "Wensday", duration: "01:30" },
        { title: "Ваша честь", duration: "01:30" },
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
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}

module.exports = Table;