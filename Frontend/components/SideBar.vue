<template>
  <div class="flex h-screen">
    <div class="w-20 bg-gray-950 h-screen">
      <img src="../assets/images/Logo.svg" class="vvsm:p-3 l:p-5 w-full bg-gray-900" alt="Logo">
        <img
          :class="isCategoriesTabOpen ? 'bg-gray-800' : 'bg-transparent'" 
          src="../assets/images/Categories.svg" 
          @click="toggleCategoriesTab"
          alt="Categories"
          class="cursor-pointer s:p-4 t:p-5 transition-colors duration-300"
        >
        <img
          :class="isProfileTabOpen ? 'bg-gray-800' : 'bg-transparent'"
          src="../assets/images/Profile.svg"
          @click="toggleProfileTab"
          alt="Profile"
          class="cursor-pointer s:p-4 t:p-7 transition-colors duration-300"
        >
      </div>
      <div class="w-[250px]">
        <div v-if="isCategoriesTabOpen" class="w-full bg-gray-800 h-screen transition-all duration-300">
          <div class="font-oswald text-gray-300 text-xl h-20 bg-gray-700 flex p-5 items-center text-center overflow-hidden">
            <span class="truncate">BmBastha</span>
          </div>
          <div class="p-4"><nuxt-link to="/"><div class=" py-3 px-5 rounded-lg font-poppins text-gray-300 hover:bg-gray-700 duration-300 text-xl">Analytics</div></nuxt-link></div>
        
        </div>
        <div v-if="isProfileTabOpen" class="bg-gray-800 h-screen transition-all duration-300">
          <div class="font-oswald text-gray-300 text-xl h-20 bg-gray-700 flex p-5 items-center text-center overflow-hidden">
            <span class="truncate">BmBastha</span>
          </div>
          <div class="p-4 flex flex-col gap-2">
            <nuxt-link to="/"><div class=" py-3 px-5 rounded-lg font-poppins text-gray-300 hover:bg-gray-700 duration-300 text-xl">Banners</div></nuxt-link>
            <nuxt-link to="/"><div class=" py-3 px-5 rounded-lg font-poppins text-gray-300 hover:bg-gray-700 duration-300 text-xl">Brands</div></nuxt-link>
            <nuxt-link to="/"><div class=" py-3 px-5 rounded-lg font-poppins text-gray-300 hover:bg-gray-700 duration-300 text-xl">Items</div></nuxt-link>
          </div>
        </div>        
    </div>
  </div>
</template>
  
  <script setup>
  import { ref } from 'vue';
  
  const isCategoriesTabOpen = ref(true);
  const isProfileTabOpen = ref(false);
  
  const toggleCategoriesTab = () => {
    isCategoriesTabOpen.value = true;
    isProfileTabOpen.value = false;
  };
  
  const toggleProfileTab = () => {
    isProfileTabOpen.value = true;
    isCategoriesTabOpen.value = false;
  };
  </script>
  
  <style scoped>
  img.bg {
    background-color: #1f2937;
  }
  img.bg-transparent {
    background-color: transparent;
  }
  </style>