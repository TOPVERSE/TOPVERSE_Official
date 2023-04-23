<template>
  <main class="scrollbar scrollbar-rounded scrollbar-w-4px scrollbar-radius-2 scrollbar-track-color-transparent scrollbar-thumb-color-dark-50 scrollbar-thumb-radius-4 h-screen w-screen overflow-auto">
    <Header />
    <slot />
    <ABtn shadow-lg>
      test
    </ABtn>
    <AInput />
    <Footer />
    <div class="mx-auto mt-5 text-center text-sm opacity-25">
      [Default Layout]
    </div>
  </main>
</template>
