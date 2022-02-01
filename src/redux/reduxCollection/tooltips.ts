import { Reducer, ActionCreator } from 'redux';

enum TooltipsActionTypes {
  SET_SHOW_CONTEXTMENU = 'tooltips/SET_SHOW_CONTEXTMENU',
  SET_COORDINATE_CONTEXTMENU = 'tooltips/SET_COORDINATE_CONTEXTMENU',
  SET_ITEM_VISIBLE = 'tooltips/SET_ITEM_VISIBLE',
  SET_CONTEXTMENU_DATA = 'tooltips/SET_CONTEXTMENU_DATA',
}

const initialState: TooltipsReducerState = {
  showContextMenu: false,
  rectDataElem: {
    bottom: 0,
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    width: 0,
    x: 0,
    y: 0,
  },
  itemVisible: null,
  contextMenuData: null,
};

type SetShowContextMenuAction = {
  type: TooltipsActionTypes.SET_SHOW_CONTEXTMENU;
  showContextMenu: boolean;
};

export const setShowContextMenu: ActionCreator<SetShowContextMenuAction> = (
  showContextMenu: boolean
) => ({
  type: TooltipsActionTypes.SET_SHOW_CONTEXTMENU,
  showContextMenu,
});

type SetRectDataElemAction = {
  type: TooltipsActionTypes.SET_COORDINATE_CONTEXTMENU;
  rectDataElem: IRect;
};

export const setRectDataElem: ActionCreator<SetRectDataElemAction> = (
  rectDataElem: IRect
) => ({
  type: TooltipsActionTypes.SET_COORDINATE_CONTEXTMENU,
  rectDataElem,
});

type SetItemVisibleAction = {
  type: TooltipsActionTypes.SET_ITEM_VISIBLE;
  itemVisible: null | string;
};

export const setItemVisible: ActionCreator<SetItemVisibleAction> = (
  itemVisible: null | string
) => ({
  type: TooltipsActionTypes.SET_ITEM_VISIBLE,
  itemVisible,
});

type SetContextmenuDataAction = {
  type: TooltipsActionTypes.SET_CONTEXTMENU_DATA;
  contextMenuData: IShowContextMenuData;
};

export const setContextmenuData: ActionCreator<SetContextmenuDataAction> = (
  contextMenuData: IShowContextMenuData
) => ({
  type: TooltipsActionTypes.SET_CONTEXTMENU_DATA,
  contextMenuData,
});

type TooltopsActions =
  | SetShowContextMenuAction
  | SetRectDataElemAction
  | SetItemVisibleAction
  | SetContextmenuDataAction;

export const tooltipsReducer: Reducer<TooltipsReducerState, TooltopsActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case TooltipsActionTypes.SET_SHOW_CONTEXTMENU:
      return {
        ...state,
        showContextMenu: action.showContextMenu,
      };

    case TooltipsActionTypes.SET_COORDINATE_CONTEXTMENU:
      return {
        ...state,
        rectDataElem: action.rectDataElem,
      };
    case TooltipsActionTypes.SET_ITEM_VISIBLE:
      return {
        ...state,
        itemVisible: action.itemVisible,
      };
    case TooltipsActionTypes.SET_CONTEXTMENU_DATA:
      return {
        ...state,
        contextMenuData: action.contextMenuData,
      };
    default:
      return state;
  }
};
