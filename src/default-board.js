import { uuid } from './utils'

export default {
  name: 'workshop',
  columns: [
    {
      name: 'todo',
      tasks: [
        {
          description: 'first description',
          name: 'first task',
          id: uuid(),
          userAssigned: null
        },
        {
          description: 'second description',
          name: 'second task',
          id: uuid(),
          userAssigned: null
        },
        {
          description: 'third description',
          name: 'and thrid',
          id: uuid(),
          userAssigned: null
        }
      ]
    },
    {
      name: 'in-progress',
      tasks: [
        {
          description: 'oh my god!',
          name: 'first task',
          id: uuid(),
          userAssigned: null
        }
      ]
    },
    {
      name: 'done',
      tasks: [
        {
          description: 'bello world!',
          name: 'first task',
          id: uuid(),
          userAssigned: null
        }
      ]
    },
    {
      name: 'done',
      tasks: [
        {
          description: 'how do you turn this on',
          name: 'hello task',
          id: '1',
          userAssigned: null
        }
      ]
    }
  ]
}
