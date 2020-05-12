import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/views/Home.vue";
import About from "@/components/views/About.vue";
import Test from "@/components/views/Test.vue";
import Contact from "@/components/views/Contact.vue";
import Country from "@/components/views/Country.vue";
import Transfer from "@/components/views/Transfer.vue";
import Symptoms from "@/components/views/Symptoms.vue";
import NotFound from '@/components/views/NotFound.vue'
import NetworkIssue from '@/components/views/NetworkIssue.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: About 
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact
  },
  {
    path: "/test",
    name: "test",
    component: Test 
  }, 
  {
    path: "/countries", 
    name: "country",
    component: Country,
    props: true 
  }, 
  {
    path: "/symptoms",
    name: "symptoms",
    component: Symptoms
  },
  {
    path: "/transfer",
    name: "transfer",
    component: Transfer
  },
  {
    path: '/404',
    name: '404',
    component: NotFound,
    props: true
  },
  {
    path: '/network-issue',
    name: 'network-issue',
    component: NetworkIssue
  },
  {
    path: '*',
    redirect: { name: '404', params: { resource: 'page' } }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;