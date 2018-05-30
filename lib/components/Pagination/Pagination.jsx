/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withEvents from '../../base/withEvents';
import withAttrs from '../../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys, aligmentKeys, sizeKeys } from '../../base/withIsHas';
import { classNameJoiner, combineSets } from '../../utils/helpers';
import PaginationNext from './components/PaginationNext';
import PaginationPrevious from './components/PaginationPrevious';
import PaginationLink from './components/PaginationLink';
import PaginationList from './components/PaginationList';
import PaginationEllipsis from './components/PaginationEllipsis';

const getPieces = () => {
  const size = 30;
  const sample = 6;
  const loc = 20;

  const mid = sample / 2;
// Pair
  if (sample % 2 === 0) {
    const piece = Math.floor(mid);
    let array = [...new Array(sample)].map((useless, index) => index + (loc - piece));
    const min = Math.min.apply(null, array);
    const max = Math.max.apply(null, array);
    const sum = min < 0
      ? min * -1
      : max > size -1
        ? size - 1 - max
        : 0;
    array = array.map(item => item + sum);
    console.log(array);
  } else {
    const piece = Math.floor(mid);
    let array = [...new Array(sample)].map((useless, index) => index + (loc - piece));
    const min = Math.min.apply(null, array);
    const max = Math.max.apply(null, array);
    const sum = min < 0
      ? min * -1
      : max > size -1
        ? size - 1 - max
        : 0;
    array = array.map(item => item + sum);
    console.log(array);
  }
};

class Pagination extends Component {
  constructor() {
    super();
    this.constructPaginationElements = this.constructPaginationElements.bind(this);
  }

  constructPaginationElements() {
    const {
      pages, currentIndex, links, nextLabel, previousLabel,
    } = this.props;
    const previous = <PaginationPrevious>{previousLabel}</PaginationPrevious>;
    const next = <PaginationNext>{nextLabel}</PaginationNext>;
    const elementsToGet = links - 2;



    const listElements = links <= pages
      ? [...new Array(pages)].map((useless, index) => (
        <PaginationLink key={index} current={index === currentIndex}>{index + 1}</PaginationLink>
      ))
      : currentIndex <= 1
        ? [...new Array(links)].map((useless, index) => (index === links - 2
          ? (<PaginationEllipsis />)
          : (
            <PaginationLink key={index} current={index === currentIndex}>
              {index + 1}
            </PaginationLink>
          )))
        : currentIndex >= pages - 2
          ? [...new Array(links)].map((useless, index) => (index === 1
            ? (<PaginationEllipsis />)
            : (
              <PaginationLink key={index} current={index === currentIndex}>
                {index + 1}
              </PaginationLink>
            )))
          : [...new Array(links)].map((useless, index) => (index === 1 || index === links - 2
            ? (<PaginationEllipsis />)
            : (
              <PaginationLink key={index} current={index === currentIndex}>
                {index + 1}
              </PaginationLink>
            )));
    return (
      <React.Fragment>
        {previous}
        {next}
        <PaginationList>
          {listElements}
        </PaginationList>
      </React.Fragment>
    );
  }

  render() {
    const {
      children,
      attrs: { className, ...restAttrs },
      events,
      pages,
    } = this.props;
    const elements = children || !pages
      ? children
      : this.constructPaginationElements();
    return (
      <nav className={classNameJoiner('pagination', className)} {...restAttrs} {...events}>
        {elements}
      </nav>
    );
  }
}

Pagination.propTypes = {
  children: PropTypes.node,
  attrs: PropTypes.shape().isRequired,
  events: PropTypes.shape().isRequired,
  pages: PropTypes.number,
  currentIndex: PropTypes.number,
  // How many pagination links at same time
  links: PropTypes.number,
  onPageClick: PropTypes.func,
  previousLabel: PropTypes.node,
  nextLabel: PropTypes.node,
};

Pagination.defaultProps = {
  children: null,
  pages: null,
  currentIndex: 0,
  links: 5,
  onPageClick: null,
  previousLabel: 'Previous',
  nextLabel: 'Next',
};

export default compose(
  withEvents(),
  withIsHas(combineSets(helpersIsKeys, aligmentKeys, sizeKeys, ['rounded']), helpersHasKeys),
  withAttrs(),
)(Pagination);
