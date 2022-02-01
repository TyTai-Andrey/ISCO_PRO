import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { lessons, students } from '../../constants/utils';
import {
  setContextmenuData,
  setItemVisible,
  setRectDataElem,
  setShowContextMenu,
} from '../../redux/reduxCollection/tooltips';
import { ContextMenu } from '../ContextMenu';

import './Table.scss';

export const Table = () => {
  const dispatch = useDispatch();
  const { showContextMenu, itemVisible } = useSelector(
    (state: AppState) => state.tooltipsReducer
  );

  useEffect(() => {
    const handleContextMenu = (event: MouseEvent & { path: Node[] }) => {
      if (showContextMenu) {
        handleClick();
      }
      event.path.forEach((elem: any) => {
        const { className } = elem;
        if (
          className?.includes('Table-body-column-item') &&
          className?.includes('visible-true')
        ) {
          const rect = elem.getBoundingClientRect();
          dispatch(setRectDataElem(rect));
          dispatch(setShowContextMenu(true));
          event.preventDefault();
        }
      });
    };
    const handleClick = () => {
      if (showContextMenu) {
        dispatch(setShowContextMenu(false));
        dispatch(setContextmenuData(null));
        dispatch(setItemVisible(null));
      }
    };
    document.addEventListener('click', handleContextMenu as EventListener);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleContextMenu as EventListener);
      document.removeEventListener('click', handleClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showContextMenu]);

  const createColumn = (lesson: ILesson) => (
    <div className="Table-body-column" key={lesson.id}>
      <div className="Table-body-column-info">
        <div className="Table-body-column-info-data">{lesson.date}</div>
        <div className="Table-body-column-info-estimation">{lesson.name}</div>
      </div>
      {students.map((student: IStudent) => {
        const evaluation = lesson.evaluations.find(
          (evaluation) => evaluation.studentId === student.id
        );

        const idsLessonAndStudent = 'n' + lesson.id + student.id;

        return (
          <div
            className={`Table-body-column-item visible-${
              itemVisible === idsLessonAndStudent
            }`}
            key={student.id + '-' + lesson.id}
            onClick={() => {
              dispatch(setItemVisible(idsLessonAndStudent));
              dispatch(
                setContextmenuData({
                  name: student.name,
                  surname: student.surname,
                  date: lesson.date,
                })
              );
            }}
          >
            {evaluation?.evaluation}
          </div>
        );
      })}
    </div>
  );

  const createStudentItem = (student: IStudent, idx: number) => (
    <div className="Table-bar-list-item" key={student.id}>
      <div className="Table-bar-list-item-number">{idx + 1}</div>
      <div className="Table-bar-list-item-name">
        {student.surname + ' ' + student.name}
      </div>
    </div>
  );

  return (
    <>
      <div className="Table">
        <div className="Table-bar">
          <div className="Table-bar-list-wrapper">
            <div className="Table-bar-list">
              <div className="Table-bar-list-item">
                <div className="Table-bar-list-item-number">П</div>
                <div className="Table-bar-list-item-name">ФИО Студента</div>
              </div>
              {students.map((student: IStudent, idx: number) =>
                createStudentItem(student, idx)
              )}
            </div>
          </div>
        </div>
        <div className="Table-body">
          {lessons.map((lesson: ILesson) => createColumn(lesson))}
        </div>
      </div>
      {showContextMenu && <ContextMenu />}
    </>
  );
};
