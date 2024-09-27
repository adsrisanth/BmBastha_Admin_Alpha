<template>
    <div class="flex h-screen bg-gray-950">
      <div class="w-20 bg-gray-950 h-screen">
        <img src="../assets/images/Logo.svg" class="vvsm:p-3 l:p-5 w-full" alt="Logo">
        <img :class="isCategoriesTabOpen ? 'bg-gray-800' : 'bg-transparent'" 
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
      <div v-if="isCategoriesTabOpen" class="w-1/6 bg-gray-800 h-screen transition-all duration-300">
        <div class="font-oswald text-gray-300 text-xl h-20 bg-gray-700 flex p-5 items-center text-center overflow-hidden">
          <span class="truncate">BmBastha</span>
          <p class="p-4"><Profile /></p>
        </div>
      </div>
      <div v-if="isProfileTabOpen" class="w-1/6 bg-gray-800 h-screen transition-all duration-300">
        <div class="font-oswald text-gray-300 text-xl h-20 bg-gray-700 flex p-5 items-center text-center overflow-hidden">
          <span class="truncate">BmBastha</span>
        </div>
          <p class="p-4"><Profile /></p>
      </div>
      <div class="flex-1">
      </div>
    </div>
  </template>
    
  <script setup>
  import { ref } from 'vue';
  
  const isCategoriesTabOpen = ref(true);
  const isProfileTabOpen = ref(false);
  
  const toggleCategoriesTab = () => {
      isCategoriesTabOpen.value = !isCategoriesTabOpen.value;
      if (isCategoriesTabOpen.value) {
        isProfileTabOpen.value = false;
      }
  };
  
  const toggleProfileTab = () => {
      isProfileTabOpen.value = !isProfileTabOpen.value;
      if (isProfileTabOpen.value) {
        isCategoriesTabOpen.value = false;
      }
  };
  </script>
  
    
    <style scoped>
    img.bg-gray-800 {
      background-color: #1f2937;
    }
    img.bg-transparent {
      background-color: transparent;
    }
</style>
    