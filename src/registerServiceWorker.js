/* eslint-disable no-console */

import { register } from 'register-service-worker'

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready() {
      console.log('Service worker is active.');
    },
    registered() {
      console.log('Service worker has been registered.')
    },
    cached() {
      console.log('Content has been cached for offline use.');
    },
    updatefound(registration) {
      console.log('New content is downloading.')
      const installingWorker = registration.installing
      console.log(installingWorker)

      document.dispatchEvent(
        new CustomEvent('swUpdateFound', { detail: registration })
      )
    },
    updated(registration) {
      console.log('New content is available; please refresh.')
      document.dispatchEvent(
        new CustomEvent('swUpdated', { detail: registration })
      )
      // Add a custom event and dispatch it.
      // Used to display of a 'refresh' banner following a service worker update.
      // Set the event payload to the service worker registration object.

    },
    offline() {
      console.log(
        'No internet connection found. App is running in offline mode.'
      )
    },
    error(error) {
      console.error('Error during service worker registration:', error)
    },
  })
}
