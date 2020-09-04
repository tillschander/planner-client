import { createRouter, createWebHistory } from 'vue-router'
import Customers from '../views/Customers.vue'
import Invoices from '../views/Invoices.vue'
import Invoice from '../views/Invoice.vue'
import Tasks from '../views/Tasks.vue'
import Timetracker from '../views/Timetracker.vue'

const routerHistory = createWebHistory()
const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            component: Customers
        },
        {
            path: '/customers',
            component: Customers
        },
        {
            path: '/invoices',
            component: Invoices
        },
        {
            path: '/invoice',
            component: Invoice
        },
        {
            path: '/tasks',
            component: Tasks
        },
        {
            path: '/timetracker',
            component: Timetracker
        }
    ]
})

export default router