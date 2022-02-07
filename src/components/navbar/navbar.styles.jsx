import styled, { css } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const toolStyles = css`
  position: relative;
  top: 3px;

  &:not(:first-child) {
    margin-left: 8px;
  }
`

export const TopBar = styled.div`
  padding-left: 15px;
  height: 50px;
  width: 100%;
  position: fixed;
  background-color: grey;
  display: flex;
  justify-content: center;
`

export const Icon = styled(FontAwesomeIcon)`
  font-size: 30px;
  position: relative;
  top: 6.5px;
  background-color: rgb(82, 82, 82);
  color: white;
  padding: 5px;
  border-radius: 5px;
  width: 40px;
  text-align: center;
  cursor: pointer;

  &:hover {
    filter: brightness(90%);
  }
`

export const ActiveTool = styled.div`
  position: absolute;
  top: 9px;
  left: 5px;

  span {
    background-color: rgb(82, 82, 82);
    border-radius: 5px;
    padding: 2.5px 16px;
    color: white;
    font-size: 20px;
    user-select: none;
  }
`

export const BrushTool = styled.div`
  background-color: rgb(114, 114, 114);
  height: 44px;
  width: 345px;

  & > * {
    margin-left: 10px;
  }

  ${toolStyles}
`

export const JsColor = styled.input`
  margin-top: 5px;
  border-style: solid;
  border-radius: 5px;
  height: 35px;
  width: 120px;
  margin-left: 3px;
  text-align: center;
  cursor: pointer;
  outline: none;
`

export const BrushSize = styled.span`
  min-width: 40px;
  height: 35px;
  position: relative;
  top: 4px;
  left: -5px;
  background-color: rgb(82, 82, 82);
  border-radius: 5px;
  padding: 2.5px 8px;
  color: white;
  font-size: 20px;
  user-select: none;
`

export const Slider = styled.input`
  -webkit-appearance: none;
  position: relative;
  left: -8px;
  width: 100px;
  height: 10px;
  background: rgb(177, 177, 177);
  outline: none;
  opacity: 0.7;
  cursor: pointer;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 10px;
    height: 10px;
    background: rgb(47, 47, 47);
  }

  &::-moz-range-thumb {
    width: 10px;
    height: 10px;
    background: rgb(47, 47, 47);
  }
`

export const BucketTool = styled.div`
  ${toolStyles}
`

export const EraserTool = styled.div`
  ${toolStyles}
`

export const ClearCanvasTool = styled.div`
  ${toolStyles}
`

export const SaveLocalStorageTool = styled.div`
  ${toolStyles}
`

export const LoadLocalStorageTool = styled.div`
  ${toolStyles}
`

export const ClearLocalStorageTool = styled.div`
  ${toolStyles}
`

export const DownloadImageTool = styled.div`
  ${toolStyles}
`
