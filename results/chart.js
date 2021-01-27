import { pokeSeenArray, pokeCaughtArray, pokeLabelArray } from './chart-utils.js';
import { getPokeStats } from '../localstorage.js';

const pokeStats = getPokeStats();

// chart display
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {  // eslint-disable-line
    type: 'bar',
    data: {
        labels: pokeLabelArray(pokeStats),
        datasets: [
            {
                label: 'you have seen this pokemon this many times',
                data: pokeSeenArray(pokeStats),
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2
            },
            {
                label: '# of times you were able to catch these pokemons',
                data: pokeCaughtArray(pokeStats),
                backgroundColor: 'lightblue',
                borderColor: 'steelblue',
                borderWidth: 2
            },
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    stepSize: 1
                }
            }],

            xAxes: [{
                ticks: {
                    beginAtZero: true,
                    stepSize: 1
                }
            }]
        }
    }
});
