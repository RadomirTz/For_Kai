import Vue from 'vue';
import Router from 'vue-router';
import Ping from '@/components/Ping';
import Wiki from '@/components/Wiki';
import Main from '@/components/Main';
import Shop from '@/components/Shop';
import Merch from '@/components/Merch';
import View from '@/components/View';
import Merch_str from '@/components/Merch_str';
import Contacts from '@/components/Contacts';
import not_found from '@/components/not_found';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/ping',
      name: 'Ping',
      component: Ping,
    },
    {
      path: '/',
      name: 'Main',
      component: Main,
    },
    {
      path: '*',
      component: not_found,
    },
    {
      path: '/wiki',
      name: 'Wiki',
      component: Wiki,
    },
    {
      path: '/wiki/:str',
      name: 'wikis',
      component: Shop,
    },
    {
      path: '/merch',
      name: 'merch',
      component: Merch,
    },
    {
      path: '/view',
      name: 'view',
      component: View,
    },
    {
      path: '/merch/:str',
      name: 'merchs',
      component: Merch_str,
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: Contacts,
    },
    {
      path: '/wiki/*',
      name: 'Wiki_Dont_have',
      component: not_found,
    }
    
  ],
});
