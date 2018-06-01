/* eslint-disable react/no-array-index-key,no-nested-ternary */
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

const getPieces = (size, sample, loc) => {
  const piece = Math.floor(sample / 2);
  const array = [...new Array(sample)].map((useless, index) => index + (loc - piece));
  const min = Math.min.apply(null, array);
  const max = Math.max.apply(null, array);
  const sum = min < 0
    ? min * -1
    : max > size - 1
      ? size - 1 - max
      : 0;
  const result = array
    .map((item, index) => {
      if (index === 0) {
        return 0;
      }
      if (index === array.length - 1) {
        return size - 1;
      }
      return item + sum;
    });
  if (result[1] !== 1) {
    result.splice(1, 0, null);
  }
  if (result[result.length - 2] !== size - 2) {
    result.splice(result.length - 1, 0, null);
  }
  return result;
};

class Pagination extends Component {
  constructor() {
    super();
    this.constructPaginationElements = this.constructPaginationElements.bind(this);
    this.handleLinkClick = this.handleLinkClick.bind(this);
  }

  handleLinkClick(index) {
    const { onPageClick } = this.props;
    return !onPageClick ? null : () => onPageClick(index);
  }

  constructPaginationElements() {
    const {
      pages, currentIndex, links, nextLabel, previousLabel,
    } = this.props;
    const prevIndex = currentIndex - 1 < 0 ? 0 : currentIndex - 1;
    const nextIndex = currentIndex + 1 >= pages ? pages - 1 : currentIndex + 1;
    const previous = (
      <PaginationPrevious
        onClick={this.handleLinkClick(prevIndex)}
        disabled={currentIndex === 0}
      >
        {previousLabel}
      </PaginationPrevious>
    );
    const next = (
      <PaginationNext
        onClick={this.handleLinkClick(nextIndex)}
        disabled={currentIndex === pages - 1}
      >
        {nextLabel}
      </PaginationNext>
    );
    const arrayIndex = getPieces(pages, links, currentIndex);
    const listElements = pages <= links
      ? [...new Array(pages)].map((useless, index) => (
        <PaginationLink
          onClick={this.handleLinkClick(index)}
          key={index}
          current={index === currentIndex}
        >
          {index + 1}
        </PaginationLink>
      ))
      : arrayIndex.map(index => (!index && index !== 0 ? (
        <PaginationEllipsis />
      ) : (
        <PaginationLink
          onClick={this.handleLinkClick(index)}
          key={index}
          current={index === currentIndex}
        >
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
