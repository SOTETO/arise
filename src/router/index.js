import Vue from 'vue'
import Router from 'vue-router'
import 'es6-promise/auto'
import '@/assets/css/better_index.css'
import locale from 'element-ui/lib/locale/lang/de'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/quill.vca.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserLock, faLockOpen, faCheckCircle, faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
//Font Awesome iCon Library
library.add(faUserLock, faLockOpen, faCheckCircle, faSignInAlt);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(Router);
Vue.use(locale);


function loadView(view) {
  return () => import(/* webpackChunkName: '[request]' */ `@/views/${view}.vue`)
}
export default new Router({
    routes: [
        {
            path: '/',
            name: 'SignIn',
            component: loadView('SignIn')
        },
        {
          path: '*',
          name: '404',
          component: loadView('404')
        },
        {
            path: '/crews',
            name: 'Crews',
            component: loadView('Crews')
        },
        {
            path: '/signup',
            name: 'SignUp',
            component: loadView('SignUp')
        },
        /*{
            path: "/signin",
            name: 'SignIn',
            component: loadView('SignIn')
        },*/
        {
            path: "/tasks",
            name: 'Tasks',
            component: loadView('Tasks')
        },
        {
            path: "/oauth",
            name: 'OAuth',
            component: loadView('OAuth')
        },
        {
            path: "/finishSignup",
            name: 'finishSignup',
            component: loadView('finishSignUp')
        },
        {
            path: "/startResetPassword",
            name: 'startResetPassword',
            component: loadView('startResetPassword')
        },
        {
            path: "/resetPassword",
            name: 'resetPassword',
            component: loadView('resetPassword')
        },
        {
            path: "/resetPasswordDone",
            name: 'resetPasswordDone',
            component: loadView('resetPasswordDone')
        },
        {
            path: "/resetPasswordInstructions",
            name: 'resetPasswordInstructions',
            component: loadView('resetPasswordInstructions')
        },
        {
            path: "/resetPasswordInstructionsPool1",
            name: 'resetPasswordInstructionsPool1',
            component: loadView('resetPasswordInstructionsPool1')
        }

    ]
});

//Vue.use(Vuex),
//Vue.use(SuiVue),
//Vue.use(VueAxios, axios),
//Vue.use(VeeValidate),
//Vue.use(Vuetify),

//Vue.use(DataTables),
//Vue.use(VueQuillEditor)

