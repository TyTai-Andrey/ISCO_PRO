import React, { useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setContextmenuData,
  setItemVisible,
  setShowContextMenu,
} from '../../redux/reduxCollection/tooltips';

import './ContextMenu.scss';

export const ContextMenu: React.FC = () => {
  const { rectDataElem, contextMenuData } = useSelector(
    (state: AppState) => state.tooltipsReducer
  );

  const dispatch = useDispatch();

  const { left, right, top, bottom, width } = rectDataElem;
  const realRight = window.innerWidth - right;
  const realBottom = window.innerHeight - bottom;
  const [value, setValue] = useState<string>('');

  const handleMoveDelete = () => {
    dispatch(setShowContextMenu(false));
    dispatch(setItemVisible(null));
    dispatch(setContextmenuData(null));
  };

  const stylesContextMenu: Partial<IRect> = useMemo(() => {
    let styles = {};

    if (left < realRight) {
      styles = { ...styles, left: left + width + 20 };
    } else {
      styles = { ...styles, right: realRight + width + 20 };
    }

    if (top < realBottom) {
      styles = { ...styles, top: top - 140 };
    } else {
      styles = { ...styles, bottom: realBottom - 140 };
    }

    return styles;
  }, [left, top, realRight, realBottom, width]);

  return (
    <div
      style={stylesContextMenu}
      className="ContextMenu"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div className="ContextMenu-title">Поставить отметку</div>
      <div className="ContextMenu-info">
        <div className="ContextMenu-info-field">Студент</div>
        <div className="ContextMenu-info-data">
          {contextMenuData?.surname + ' ' + contextMenuData?.name}
        </div>
      </div>
      <div className="ContextMenu-info">
        <div className="ContextMenu-info-field">Дата</div>
        <div className="ContextMenu-info-data">{contextMenuData?.date}</div>
      </div>
      <label>
        <input
          type="checkbox"
          className="ContextMenu-input ContextMenu-input--checkbox"
        />
        Не присутствовал
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="ContextMenu-input ContextMenu-input--text"
      />
      <div
        onClick={handleMoveDelete}
        role="button"
        tabIndex={0}
        className="ContextMenu--button"
      >
        <p className="ContextMenu--button-text">Поставить отметку</p>
      </div>
      <div
        className={`ContextMenu-indicator ${
          stylesContextMenu.left ? 'left' : 'right'
        } `}
      ></div>
    </div>
  );
};
