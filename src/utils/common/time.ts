import moment from 'moment';

export function formatDate(date = new Date()) {
    // return moment(date, ["DD/MM/YYYY"]).format("DD/MM/YYYY HH:mm A");
    return moment(date, ["DD/MM/YYYY"]).format("DD/MM/YYYY");
}