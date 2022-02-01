type TooltipsReducerState = {
  showContextMenu: boolean;
  rectDataElem: IRect;
  itemVisible: null | string;
  contextMenuData: null | IShowContextMenuData;
};

type AppState = {
  tooltipsReducer: TooltipsReducerState;
};
