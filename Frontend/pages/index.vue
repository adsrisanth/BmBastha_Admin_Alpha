<template>
    <div class="flex h-screen bg-gray-950">
        <div class="vvsm:w-16 ssm:w-16 lg:w-24 bg-gray-950 h-screen">
            <img src="../assets/images/Logo.svg" class="vvsm:p-3 lg:p-5 w-full" alt="Logo">
            <img 
              :class="isCategoriesTabOpen ? 'bg-gray-800' : 'bg-transparent'" 
              src="../assets/images/Categories.svg" 
              @click="toggleCategoriesTab" 
              alt="Categories" 
              class="cursor-pointer vvsm:p-4 lg:p-7 transition-colors duration-300"
            >
            <img 
              :class="isProfileTabOpen ? 'bg-gray-800' : 'bg-transparent'" 
              src="../assets/images/Profile.svg" 
              @click="toggleProfileTab" 
              alt="Profile" 
              class="cursor-pointer vvsm:p-4 lg:p-7 transition-colors duration-300"
            >
        </div>
        <div v-if="isCategoriesTabOpen" class="w-1/4 bg-gray-800 h-screen transition-all duration-300">
            <div class="font-oswald text-gray-300 text-3xl h-28 bg-gray-700 flex p-5 items-center text-center overflow-hidden">
                <span class="truncate">BmBastha</span>
            </div>
        </div>
        <div v-if="isProfileTabOpen" class="w-1/4 bg-gray-800 h-screen transition-all duration-300">
            <p class="p-4">This is the Profile tab content.</p>
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
  