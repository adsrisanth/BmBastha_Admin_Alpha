<template>
  <div class="bg-gray-950 flex justify-center font-poppins text-gray-200 w-screen h-screen">
    <div class="">
      <div class="flex flex-col">
        <div class="text-3xl pb-3">Title</div>
        <input 
          type="text" 
          class="text-2xl px-5 py-3 rounded-lg w-[300px] bg-gray-700 placeholder-gray-400 text-white" 
          placeholder="Name" 
        />
      </div>
      <div class="flex flex-col">
        <div class="text-3xl pb-3">Banner ID</div>
        <input 
          type="text" 
          class="text-2xl px-5 py-3 rounded-lg w-[300px] bg-gray-700 placeholder-gray-400 text-white" 
          placeholder="Name" 
        />
      </div>
      <div class="flex flex-col">
        <div class="text-3xl">Active</div>
        <div class="w-[300px]"><DropDown /></div>
      </div>
      <div class="flex flex-col">
        <div class="text-3xl pb-3">Image</div>
        <input 
          type="file" 
          accept="image/*" 
          class="text-2xl px-5 py-3 rounded-lg w-[300px] bg-gray-700 text-white cursor-pointer" 
        />
      </div>
    </div>
  </div>
</template>