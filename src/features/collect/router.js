export default {
  path: '/collect',
  component: r => require.ensure([], () => r(require('./pages/layout')), 'collect/layout'),
  redirect: '/collect/math',
  children: [
    {
      path: 'physics',
      name: 'collect_physics',
      component: r => require.ensure([], () => r(require('./pages/physics')), 'collect/physics')
    },
    {
      path: 'math',
      name: 'collect_math',
      component: r => require.ensure([], () => r(require('./pages/math')), 'collect/math')
    },
    {
      path: 'chemistry',
      name: 'collect_chemistry',
      component: r => require.ensure([], () => r(require('./pages/chemistry')), 'collect/chemistry')
    }
  ]
}
