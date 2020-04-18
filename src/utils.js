export function uuid () {
  return Math.random().toString(16).slice(2)
}

export function saveStatePlugin (store) {
  store.subscribe(
    (mutation, state) => localStorage.setItem('boards', JSON.stringify(state.boards))
  )
}

const version = '2.0.1'
const isReady = 'Coming Soon'

console.log(`%c Fake-Tool %c ${isReady} %c %c Detected Ver. %c ${version} `,
  'background:#35495e; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff',
  'background:#41b883; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff',
  'background:transparent',
  'background: #35495e; padding: 1px; border-radius: 3px 0 0 3px; color: #fff;',
  'background: #41b883; padding: 1px; border-radius: 0 3px 3px 0; color: #fff;')
