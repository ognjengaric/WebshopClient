import customHeader from './components/Header.vue';
import categoryList from './components/CategoryList.vue';

import loginFrom from './components/LoginForm.vue';
import registerForm from './components/RegisterForm.vue'
import adsView from './components/AdsView.vue'

export default [
    {path: '/', components: { default: customHeader, aside: categoryList, main: adsView}},    
    {path: '/login', component: loginFrom},
    {path: '/register', component: registerForm}
]