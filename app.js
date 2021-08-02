navigator.serviceWorker.register('serviceworker.js')
    .then(() => {
            console.log('[SW] Service worker has been registered');
        },
        e => {
            console.error('[SW] Service worker registration failed', e);
        }
    );