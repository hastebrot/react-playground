import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { ThemeProvider } from 'emotion-theming';

const SWATCH_HEIGHT = '150px';
const SWATCH_WIDTH = '135px';

const Color = styled('div')`
  ${({ theme, colorName }) => css`
    width: ${SWATCH_HEIGHT};
    height: ${SWATCH_WIDTH};
    background-color: ${colorName};
    display: inline-block;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  `};
`;

const ColorName = styled('div')`
  ${({ theme, colorName }) => css`
    display: flex;
    justify-content: space-between;
    content: '${colorName}';
    padding: 16px;
    font-size: 13px;
    line-height: 20px;
    font-weight: 700;
  `};
`;

const ColorHex = styled("span")`
  ${({ theme, colorName }) => css`
    font-size: 13px;
    line-height: 20px;
    color: rgb(157, 167, 177);
  `};
`;

const ColorWrapper = styled('div')`
  ${({ theme }) => css`
    display: inline-block;
    margin-right: 16px;
    margin-bottom: 16px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    box-shadow: rgba(12, 15, 20, 0.02) 0px 0px 0px 1px, rgba(12, 15, 20, 0.06) 0px 0px 1px 0px, rgba(12, 15, 20, 0.06) 0px 2px 2px 0px;
  `};
`;

const Swatch = ({ colorName }) => (
  <ThemeProvider theme={{}}>
    <ColorWrapper>
      <Color colorName={colorName} />
      <ColorName>
        <ColorHex element="span" size="kilo" noMargin>
          {colorName}
        </ColorHex>
        <span bold element="span" size="kilo" noMargin>
          {colorName}
        </span>
      </ColorName>
    </ColorWrapper>
  </ThemeProvider>
);

Swatch.propTypes = {
  // eslint-disable-next-line
  theme: PropTypes.object.isRequired,
  colorName: PropTypes.string.isRequired
};

export default Swatch;
