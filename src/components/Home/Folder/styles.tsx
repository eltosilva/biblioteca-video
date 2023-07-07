'use client'

import { styled } from 'styled-components'

export const StyleFolder = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 27.5rem;
  background-color: #f0f8ff;

  hr {
    color: #c8d4dd;
    width: 37.5rem;
    margin: 0.5rem 0;
  }
`

export const FolderLink = styled.p`
  width: 10rem;
  line-height: 1.75rem;
  text-align: center;
  font-size: 0.625rem;
  color: #007eff;
  font-weight: 700;
  border: solid 2px #007eff;
  border-radius: 1rem;
  border-bottom-left-radius: 0;

  a {
    text-decoration: none;
  }
`

export const FolderMessage = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1.125rem;
  font-size: 4rem;
  font-weight: 800;
  color: #0084ff;

  span:first-child {
    font-size: 2rem;
    font-weight: 500;
    color: #1c3c50;
  }

  img {
    height: 1.25rem;
    float: right;
    margin-left: -1.25rem;
    margin-top: 0.75rem;
    display: block;
  }
`

export const FolderDescription = styled.p`
  color: #4b6170;
  font-size: 0.875rem;
`