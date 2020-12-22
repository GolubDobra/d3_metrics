//import * as d3 from 'd3-transition';
//import moment from 'moment';

// let data = [
//   {
//     id: 1,
//     fact: 53,
//     rank: 1, //разрядность = 1,
//     byPeriod: true, //true/false, отображение за период (true) или на дату (false)
//     hasPlan: false, //true/false, есть план или нет плана
//     plan: 100, //плановое,
//     measure: '%', //единица измерения
//   },
//   {
//     id: 1,
//     fact: 13,
//     rank: 1, //разрядность = 1,
//     byPeriod: true, //true/false, отображение за период (true) или на дату (false)
//     hasPlan: false, //true/false, есть план или нет плана
//     plan: 100, //плановое,
//     measure: '%', //единица измерения
//   },
//   {
//     id: 1,
//     fact: 12,
//     rank: 1, //разрядность = 1,
//     byPeriod: true, //true/false, отображение за период (true) или на дату (false)
//     hasPlan: false, //true/false, есть план или нет плана
//     plan: 100, //плановое,
//     measure: '%', //единица измерения
//   },
//   {
//     id: 1,
//     fact: 5,
//     rank: 1, //разрядность = 1,
//     byPeriod: true, //true/false, отображение за период (true) или на дату (false)
//     hasPlan: false, //true/false, есть план или нет плана
//     plan: 100, //плановое,
//     measure: '%', //единица измерения
//   },
//   {
//     id: 1,
//     fact: 4,
//     rank: 1, //разрядность = 1,
//     byPeriod: true, //true/false, отображение за период (true) или на дату (false)
//     hasPlan: false, //true/false, есть план или нет плана
//     plan: 100, //плановое,
//     measure: '%', //единица измерения
//   },
//   {
//     id: 1,
//     fact: 14,
//     rank: 1, //разрядность = 1,
//     byPeriod: true, //true/false, отображение за период (true) или на дату (false)
//     hasPlan: false, //true/false, есть план или нет плана
//     plan: 100, //плановое,
//     measure: '%', //единица измерения
//   },

//   {
//     id: 1,
//     fact: 58,
//     rank: 1, //разрядность = 1,
//     byPeriod: true, //true/false, отображение за период (true) или на дату (false)
//     hasPlan: false, //true/false, есть план или нет плана
//     plan: 100, //плановое,
//     measure: '%', //единица измерения
//   },
// ];

// TODO: Аргументы функции генератора:
// Количество значений  --  numOfBars
// Точка старта (дата начала)  -- dateOfStart
// Количество показателей внутри бара   -- numOfValueInBar
// Минимальное значение  -- minValue
// Максимальное значение  -- maxValue

//Функция для генерации рандомной даты
// function generateRandomDate(start, end) {
//   return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
// }

let numOfBars = Math.round(Math.random() * 25); //кол-во баров от 0 до 25, пример

//Рандомное кол-во показаний в баре
let numOfValueInBar = Math.round(Math.random() * (6 - 1) + 1);

//Улучшенная версия generateValue
const range = Array.from(new Array(numOfBars * numOfValueInBar), (_, i) => {
  return {
    id: i,
    //data: ,//за какой период данные
    fact: Math.round(Math.random() * 100),
    rank: 1, //разрядность = 1,
    byPeriod: true, //true/false, отображение за период (true) или на дату (false)
    hasPlan: false, //true/false, есть план или нет плана
    plan: 100, //плановое,
    measure: '%', //единица измерения});
  };
});

//let data = range(numOfBars, numOfValueInBar);

//
//SVG
//

// const margin = {
//   top: 50,
//   right: 50,
//   bottom: 50,
//   left: 50,
// };

// const width = 1400 - margin.left - margin.right;
// const height = 700 - margin.top - margin.bottom;

// const svg = d3
//   .select('main')
//   .append('svg')
//   .attr('width', width + margin.left + margin.right)
//   .attr('height', height + margin.top + margin.bottom)
//   .style('border', '2px solid green')
//   .append('g')
//   .attr('transform', `translate(${margin.left}, ${margin.top})`);

// //data.map((item, n) => svg.append('rect').attr('class', 'bar').attr('width', 100));

// function draw() {
//   const barWidth = 45;
//   const barOffset = 23;
//   const valueRange = [0, d3.max((data, d) => d.indicators[0].fact)];

//   //почему scaleLinear не функция????
//   //const y = d3.scaleLinear().domain(valueRange).range([0, 960]);
//   const bars = svg.selectAll('.bar').data(data);

//   //УДАЛЕНИЕ ЭЛЕМЕНТОВ!!!!!!
//   bars.exit().transition().duration(1000).style('fill', 'Yellow').style('opacity', '0').remove();

//   //почему это обновляет данные???  обнавляет весь DOM
//   bars
//     .attr('class', 'new bar')
//     .style('fill', '#fff')
//     .transition() // не работает!!!!!!!!
//     .duration(1000)
//     .style('opacity', '1')
//     .style('fill', 'rgb(40, 82, 78)')
//     .attr('height', (d) =>
//       d.indicators.reduce(function (accumulator, currentValue) {
//         return accumulator + currentValue.fact;
//       }, -1),
//     )
//     .attr('x', (d, n) => n * barOffset + n * barOffset);

//   bars
//     .enter()
//     .append('rect')
//     .attr('class', 'bar')
//     .style('fill', '#fff')
//     .attr('width', barWidth)
//     .transition()
//     .duration(1000)
//     .style('opacity', '1')
//     .style('fill', 'rgb(180, 70, 85)')
//     .attr('height', (d) =>
//       d.indicators.reduce(function (accumulator, currentValue) {
//         return accumulator + currentValue.fact;
//       }, -1),
//     ) //надо будет поскладывать
//     .attr('x', (d, n) => n * barOffset + n * barOffset);
// }

// draw();

// setInterval(() => {
//   //const elementNum = Math.round(Math.random() * numOfBars);
//   //data[elementNum].indicators[0].fact = Math.round(Math.random() * 500);

//   //Рандомные значения для аргументов функции генератора
//   numOfBars = Math.round(Math.random() * 25); //кол-во баров от 0 до 25, пример

//   //Рандомное кол-во показаний в баре
//   numOfValueInBar = Math.round(Math.random() * (6 - 1) + 1);

//   // console.log('кол-во баров на графике = ' + numOfBars);
//   // console.log('кол-во составляющих бара = ' + numOfValueInBar);
//   // //console.log('дата начала отсчета = ' + dateOfStart);
//   // console.log('____________________________________________________');
//   data = range(numOfBars, numOfValueInBar);

//   draw();
// }, 2000);
