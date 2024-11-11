<script setup lang="ts">
import * as Sentry from '@sentry/nuxt'

Sentry.setUser({ id: 'nuxt' })
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>
