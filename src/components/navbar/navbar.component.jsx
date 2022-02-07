import {
  faBrush,
  faFillDrip,
  faEraser,
  faUndoAlt,
  faDownload,
  faUpload,
  faTrashAlt,
  faSave,
} from '@fortawesome/free-solid-svg-icons'

import {
  TopBar,
  ActiveTool,
  BrushTool,
  Icon,
  JsColor,
  BrushSize,
  Slider,
  BucketTool,
  EraserTool,
  ClearCanvasTool,
  SaveLocalStorageTool,
  LoadLocalStorageTool,
  ClearLocalStorageTool,
  DownloadImageTool
} from './navbar.styles'

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
)

export default Navbar
