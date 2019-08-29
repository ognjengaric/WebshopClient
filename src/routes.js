import customHeader from './components/Header.vue';
import categoryList from './components/CategoryList.vue';
import adsView from './components/AdsView.vue'
import singleAd from './components/SingleAd.vue';

import loginFrom from './components/LoginForm.vue';
import registerForm from './components/RegisterForm.vue'

export default [
    {path: '/', components: { default: customHeader, aside: categoryList, main: adsView}},    
    {path: '/login', component: loginFrom},
    {path: '/register', component: registerForm},
    {path: '/ad/:id', name: 'ad', component: singleAd}
]