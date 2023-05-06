const { createSSRApp } = require('vue')
const { renderToString } = require('@vue/server-renderer')
const app = createSSRApp({
  data: () => ({
    msg: 'hello',
    context: typeof context !== 'undefined' ? context : {}
  }),
  methods: {
    click() {
      alert('siema')
    }
  },
  template: `<div @click="click">{{ msg }}, mam też dostep do contextu {{ context }} </div>`
})

;(async () => {
  if (typeof window !== 'undefined') {
    return app.mount('#app')
  }

  let html = await renderToString(app)
  html = `
  <script type="text/javascript">
  var context = ${JSON.stringify(context)}
  </script>
  <div id="app">${html}</div>`
  dispatch(html)
})()

