const React = require("react");
const moment = require("moment");

function DateCounter(props){
    const START_SESSION = moment(props.start, 'DD.MM.YYYY').add(1, 'day');
    const END_SESSION = moment(props.end, 'DD.MM.YYYY').add(1, 'day');
    const TODAY = moment();
    const DIFF = START_SESSION.diff(TODAY, 'day');

    const resilt_string = DIFF > 0 ? `Дней до сессии: ${DIFF}` : `Дней до конца сессии: ${END_SESSION.diff(TODAY, 'day')}`

    return (
        <h2 className="m-3">{resilt_string}</h2>
    )
}

module.exports = DateCounter;