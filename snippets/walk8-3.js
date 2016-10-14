var height = rec.get('height');
var chartSectors = [{
    end: height * 2.285,
    label: 'Normal',
    color: 'green'
}, {
    start: height * 2.286,
    color: 'yellow'
}, {
    start: height * 2.85,
    end: 350,
    label: 'Obese',
    color: 'red'
}];