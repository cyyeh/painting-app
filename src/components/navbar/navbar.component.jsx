import React from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBrush,
  faFillDrip,
  faEraser,
  faUndoAlt,
  faDownload,
  faUpload,
  faTrashAlt,
  faSave,
} from '@fortawesome/free-solid-svg-icons';

const toolStyles = css`
  position: relative;
  top: 3px;

  &:not(:first-child) {
    margin-left: 8px;
  }
`;

const TopBar = styled.div`
  padding-left: 15px;
  height: 50px;
  width: 100%;
  position: fixed;
  background-color: grey;
  display: flex;
  justify-content: center;
`;

const Icon = styled(FontAwesomeIcon)`
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
`;

const ActiveTool = styled.div`
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
`;

const BrushTool = styled.div`
  background-color: rgb(114, 114, 114);
  height: 44px;
  width: 345px;

  & > * {
    margin-left: 10px;
  }

  ${toolStyles}
`;

const JsColor = styled.input`
  margin-top: 5px;
  border-style: solid;
  border-radius: 5px;
  height: 35px;
  width: 120px;
  margin-left: 3px;
  text-align: center;
  cursor: pointer;
  outline: none;
`;

const BrushSize = styled.span`
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
`;

const Slider = styled.input`
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
`;

const BucketTool = styled.div`
  ${toolStyles}
`;

const EraserTool = styled.div`
  ${toolStyles}
`;

const ClearCanvasTool = styled.div`
  ${toolStyles}
`;

const SaveLocalStorageTool = styled.div`
  ${toolStyles}
`;

const LoadLocalStorageTool = styled.div`
  ${toolStyles}
`;

const ClearLocalStorageTool = styled.div`
  ${toolStyles}
`;

const DownloadImageTool = styled.div`
  ${toolStyles}
`;

const Navbar = () => (
  <TopBar>
    <ActiveTool>
      <span title="Active Tool">Brush</span>
    </ActiveTool>
    <BrushTool>
      <Icon icon={faBrush} />
      <JsColor value="a51dab" id="brush-color" />
      <BrushSize id="brush-size" title="Brush Size">
        10
      </BrushSize>
      <Slider type="range" min="1" max="50" value="10" id="brush-slider" />
    </BrushTool>
    <BucketTool>
      <Icon icon={faFillDrip} />
      <JsColor value="ffffff" id="bucket-color" />
    </BucketTool>
    <EraserTool>
      <Icon icon={faEraser} id="eraser" title="Eraser" />
    </EraserTool>
    <ClearCanvasTool>
      <Icon icon={faUndoAlt} id="clear-canvas" title="Clear" />
    </ClearCanvasTool>
    <SaveLocalStorageTool>
      <Icon icon={faDownload} id="save-storage" title="Save Local Storage" />
    </SaveLocalStorageTool>
    <LoadLocalStorageTool>
      <Icon icon={faUpload} id="load-storage" title="Load Local Storage" />
    </LoadLocalStorageTool>
    <ClearLocalStorageTool>
      <Icon icon={faTrashAlt} id="clear-storage" title="Clear Local Storage" />
    </ClearLocalStorageTool>
    <DownloadImageTool>
      <a id="download">
        <Icon icon={faSave} title="Save Image File" />
      </a>
    </DownloadImageTool>
  </TopBar>
);

export default Navbar;
