<template>
  <header class="bg-header/10 min-h-[100px]" z-100 w-full flex flex-col items-start justify-start px-5 md="items-center flex-row justify-around px-15 absolute z-100 top-0">
    <NuxtLink to="/" class="w-35 flex items-center gap-5">
      <BrandLogo />
    </NuxtLink>
    <nav h-full flex items-center>
      <HeaderNav />
    </nav>
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
