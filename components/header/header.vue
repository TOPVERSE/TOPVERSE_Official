<script setup lang="ts">
const nav = [
  {
    name: 'nav.dashboard',
    to: '/dashboard',
  },
  {
    name: 'nav.datacenter',
    to: '/data-center',
  },
  {
    name: 'nav.server',
    to: '/server',
  },
  {
    name: 'nav.filer',
    to: '/filer',
  },
  {
    name: 'nav.cdn',
    to: '/cdn',
  },
  {
    name: 'nav.management',
    to: '/management',
  },
]
</script>

<template>
  <header class="bg-header/10 h-[100px]" absolute z-100 w-full flex items-center justify-between px-15>
    <NuxtLink to="/" class="w-35 flex items-center gap-5">
      <BrandLogo />
    </NuxtLink>
    <nav h-full flex items-center>
      <HeaderNav />
    </nav>
    <div w-20 flex justify-center>
      <ABtn variant="text">
        login
      </ABtn>
      <ABtn shadow-lg>
        login
      </ABtn>
    </div>
  </header>
</template>
