interface IStudent {
  name: string;
  surname: string;
  id: number;
}

interface ILesson {
  id: number;
  date: string;
  name: string;
  students: number[];
  evaluations: {
    studentId: number;
    evaluation: number;
  }[];
}

interface IRect {
  bottom: number;
  height: number;
  left: number;
  right: number;
  top: number;
  width: number;
  x: number;
  y: number;
}

interface IShowContextMenuData {
  name: '';
  surname: '';
  date: '';
}
