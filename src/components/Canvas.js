import React, { useRef } from 'react';
import useWindowSize from './useWindowSize';
import Transformation from './Transformation';
import * as d3 from 'd3';
//import moment from 'moment';
import 'moment/locale/ru';

const Canvas = () => {
  //console.log(props.data);
  const nameRef = useRef(null); //ссылается на элемент в DOM дереве (svg)
  const [width, height] = useWindowSize();
  const _data = Transformation();

  //МАССИВ МЕСЯЦЕВ и ДОБАВЛЕНИЕ Y КООРДИНАТЫ
  let domainValue = [];
  _data.forEach((num, index, arr) => {
    num.date.locale('ru');
    if (num.id === 0) {
      domainValue.push(num.date.format('MMMM')); //(num) => num.date.format('MMMM');
      num['yCoordinate'] = 0;
    } else {
      num['yCoordinate'] = arr[index - 1].yCoordinate + arr[index - 1].fact;
    }
  });

  console.log(_data);
  console.log(width, height);
  console.log(domainValue);

  // var A = d3.scaleBand().domain(domainValue).range([10, 50]);

  // // console.log(A(''));

  // console.log(A('February'));
  // console.log(A('March'));
  // console.log(A('April'));
  // console.log(A('May'));

  //SVG
  // const margin = {
  //   top: 50,
  //   right: 50,
  //   bottom: 50,
  //   left: 50,
  // };

  // //const _width = 1400 - margin.left - margin.right;
  // //const _height = 700 - margin.top - margin.bottom;
  // const svg = d3
  //   .data(_data)
  //   .enter()
  //   .attr('width', width + margin.left + margin.right)
  //   .attr('height', height + margin.top + margin.bottom)
  //   .style('border', '2px solid green')
  //   .append('g')
  //   .attr('transform', `translate(${margin.left}, ${margin.top})`);

  // function draw() {
  //   const barWidth = 45;
  //   const barOffset = 23;
  //   //const valueRange = [0, d3.max((data, d) => d.indicators[0].fact)];

  //   //почему scaleLinear не функция????
  //   //const y = d3.scaleLinear().domain(valueRange).range([0, 960]);
  //   const bars = svg.data(_data);

  //   //УДАЛЕНИЕ ЭЛЕМЕНТОВ!!!!!!
  //   //bars.exit().transition().duration(1000).style('fill', 'Yellow').style('opacity', '0').remove();

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

  const svg = d3.select('svg');
  const bars = svg.selectAll('rect');

  //ДОБАВЛЯЕМ АТРИБУТЫ ДЛЯ RECT, КОТОРЫЕ УЖЕ В DOM
  bars
    .data(_data)
    .attr('width', 50)
    .attr('height', (d) => d.fact)
    .attr('fill', 'pink');
  // const group = svg.append('g');

  //ДОБАВЛЯЕМ RECT В DOMs
  bars
    .enter()
    .append('rect')
    .attr('width', 50)
    .attr('height', (d) => d.fact)
    .attr('fill', 'pink');

  return (
    <svg ref={nameRef} width={width} height={height}>
      <rect></rect>
    </svg>
  );
};

export default Canvas;
