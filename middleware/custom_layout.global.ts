export default defineNuxtRouteMiddleware((to) => {
    // Set the layout on the route you are navigating _to_
    let auth_page = [
        '/',
        '/uikit/formlayout',
        '/uikit/input',
        '/uikit/floatlabel',
        '/uikit/invalidstate',
        '/uikit/button',
        '/uikit/table',
        '/uikit/list',
        '/uikit/tree',
        '/uikit/panel',
        '/uikit/overlay',
        '/uikit/media',
        '/uikit/menu',
        '/uikit/menu',
        '/uikit/menu/seat',
        '/uikit/menu/payment',
        '/uikit/menu/confirmation',
        '/uikit/message',
        '/uikit/file',
        '/uikit/charts',
        '/uikit/misc',
        '/blocks',
        '/utilities/icons',
        '/pages/timeline',
        '/pages/empty',
        '/pages/crud',
        '/documentation',

    ]

    if (auth_page.includes(to.path.replace(/(.+)(\/)$/, '$1'))) {
        setPageLayout('auth')
    }
})