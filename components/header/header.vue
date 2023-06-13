<template>
  <header class="bg-header/10 h-100px w-full flex justify-between px-5 md:px-30 sm:px-20 xl:px-60" lg="absolute z-100 top-0">
    <LocaleNuxtLink href="/" class="w-35 flex flex-shrink-0 items-center gap-5">
      <BrandLogo />
    </LocaleNuxtLink>
    <div class="h-100px flex flex-grow items-center justify-end">
      <HeaderNav />
      <HeaderMobileNav />
    </div>
    <!-- <div w-20 flex justify-center> -->
    <!-- <ABtn variant="text">
        login
      </ABtn>
      <ABtn shadow-lg>
        login
      </ABtn> -->
    <!-- </div> -->
  </header>
</template>
