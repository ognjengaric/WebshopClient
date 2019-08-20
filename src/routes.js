import customHeader from './components/Header.vue';
import categoryList from './components/CategoryList.vue';

import loginFrom from './components/LoginForm.vue';
import registerForm from './components/RegisterForm.vue'

export default [
    {path: '/', components: { default: customHeader, aside: categoryList}},    
    {path: '/login', component: loginFrom},
    {path: '/register', component: registerForm}
]