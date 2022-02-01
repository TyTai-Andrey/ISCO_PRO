export const students: IStudent[] = [
    {
        name: 'Andrey',
        surname: 'Andriynov',
        id: 1
    },
    {
        name: 'Andrey2',
        surname: 'Andriynov2',
        id: 2
    },
    {
        name: 'Andrey3',
        surname: 'Andriynov3',
        id: 3
    },
    {
        name: 'Andrey4',
        surname: 'Andriynov4',
        id: 4
    },
    {
        name: 'Andrey5',
        surname: 'Andriynov5',
        id: 5
    },
];

export const lessons: ILesson[] = [
    {
        id: 1,
        date: '20.12.2022',
        name: 'Системный подход к аналитике',
        students: [1],
        evaluations: [
            {
                studentId: 1,
                evaluation: 4,
            },
            {
                studentId: 4,
                evaluation: 1,
            },
            {
                studentId: 2,
                evaluation: 2,
            },
        ]
    },
    {
        id: 2,
        date: '21.12.2022',
        name: 'Системный подход к аналитике',
        students: [1],
        evaluations: [
            {
                studentId: 1,
                evaluation: 4,
            },
            {
                studentId: 3,
                evaluation: 5,
            },
        ]
    },
    {
        id: 3,
        date: '22.12.2022',
        name: 'Системный подход к аналитике',
        students: [1],
        evaluations: [
            {
                studentId: 5,
                evaluation: 4,
            },
            {
                studentId: 4,
                evaluation: 3,
            },
        ]
    },
    {
        id: 4,
        date: '23.12.2022',
        name: 'Системный подход к аналитике',
        students: [1],
        evaluations: [
            {
                studentId: 3,
                evaluation: 4,
            }
        ]
    },

]
