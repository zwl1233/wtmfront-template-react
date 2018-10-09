export default {
    editer: () => import('./editer').then(x => x.default),
    testTT: () => import('./testTT').then(x => x.default)
}