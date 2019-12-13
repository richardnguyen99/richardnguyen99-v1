import styled from 'styled-components'

export interface BrandProps {
  [c: string]: any
}

const Brand = styled.a<BrandProps>`
  /* Help content and logo stay in the same block */
  display: inline-block;
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  margin-right: 0.5rem;
  line-height: inherit;
  white-space: nowrap;

  color: var(--Theme-NavLink--Color);
  font-size: 1.25rem;
  font-weight: 700;

  &:hover,
  &:focus {
    color: var(--Theme-NavLink--Color__onHover);
    text-decoration: none;
  }
`

export default Brand
