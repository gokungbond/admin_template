<template>
  <nav class="bg-white w-full h-[50px] text-gray-600 flex justify-end drop-shadow-md" :class="navBarTransform">
      <button class="bg-gray-200 text-gray-400 font-bold px-5 py-1 text-sm text-center hover:bg-red-500 hover:text-white">
        <font-awesome-icon icon="fa-solid fa-power-off"  size="lg"/>
      </button>
  </nav>
  <main :class="mainTransform">
    <div class="p-10 text-gray-600">
      <div class="mb-3 text-xl font-bold">Personals</div>
      <div class="p-5 bg-white shadow rounded flex justify-end items-center">
        <button class="px-3 py-1 text-slate-900 hover:bg-slate-900 hover:text-white text-sm border border-slate-900 rounded">
          Add new
        </button>
      </div>
    </div>
  </main>
  <aside :class="sideBarTransform" class="h-[100vh] fixed top-0 left-0 bg-slate-700 text-white border-r border-gray-200 drop-shadow-md">
    <div v-if="!toggle" class="sidebar-large h-[50px] flex justify-between items-center px-2">
      <div class="font-bold">Company Logo Here</div>
      <button class="sidebar-toggle" @click="sideBarToggle">
        <font-awesome-icon icon="fa-solid fa-bars" size="lg"/>
      </button>
    </div>
    <div v-else class="sidebar-mini h-[50px] flex justify-between items-center px-2">
      <div class="font-bold">CLH</div>
      <button class="sidebar-toggle" @click="sideBarToggle">
        <font-awesome-icon icon="fa-solid fa-xmark" size="lg"/>
      </button>
    </div>
    <div v-if="!toggle" class="flex items-center h-[120px] px-2">
      <img class="w-16 h-16 rounded-full" src="./assets/user/userImage.avif" alt="user-photo">
      <div class="text-left ml-2" v-if="!toggle">
        <div class="font-semibold text-sm">Berting Palabra</div>
        <div class="text-xs">Senior Junior Web Technician</div>
        <span class="text-xs bg-slate-900 text-white px-1 py-[2px] rounded cursor-pointer" @click="onClickStatus">
          <font-awesome-icon icon="fa-solid fa-circle" size="xs" class="text-green-500"/>
          <span class="ml-1">Active</span>
        </span>
      </div>
    </div>
    <div v-else class="px-2 py-2 text-center">
      <img class="w-16 h-16 rounded-full" src="./assets/user/userImage.avif" alt="user-photo">
      <div class="font-semibold text-sm">Bert</div>
      <div class="mt-1 text-xs bg-slate-900 text-white px-1 py-[2px] rounded cursor-pointer">
          <font-awesome-icon icon="fa-solid fa-circle" size="xs" class="text-green-500"/>
          <span class="ml-1">Active</span>
      </div>
    </div>
    <div v-if="!toggle" class="px-2 relative">
      <input type="text" placeholder="Type to search..." class="text-gray-900 text-sm bg-gray-300 border border-gray-300 rounded-sm w-full py-2 px-2 pr-[40px] outline-none rounded">
      <font-awesome-icon class="absolute top-3 right-5 text-gray-500" icon="fa-solid fa-magnifying-glass" size="md"/>
    </div>
    <div class="links mt-5 px-2">
      <div :class="linkTransform" class="hover:bg-slate-500 text-sm">
        <div :class="linkIconTransform">
          <font-awesome-icon icon="fa-solid fa-person-circle-plus" class="text-gray-400"/>
        </div>
        <span v-if="!toggle">Personals</span>
        <font-awesome-icon v-if="!toggle" icon="fa-solid fa-angle-right" /> 
      </div>
      <div :class="linkTransform" class="hover:bg-slate-500 text-sm">
        <div :class="linkIconTransform">
          <font-awesome-icon icon="fa-solid fa-person-walking-arrow-right" class="text-gray-400"/>
        </div>
        <span v-if="!toggle">Assemblies</span>
        <font-awesome-icon v-if="!toggle" icon="fa-solid fa-angle-right" />
      </div>
      <div :class="linkTransform" class="hover:bg-slate-500 text-sm">
        <div :class="linkIconTransform">
          <font-awesome-icon icon="fa-solid fa-people-group" class="text-gray-400"/>
        </div>
        <span v-if="!toggle">SLP Associations</span>
        <font-awesome-icon v-if="!toggle" icon="fa-solid fa-angle-right" />
      </div>
      <div :class="linkTransform" class="hover:bg-slate-500 text-sm">
        <div :class="linkIconTransform">
          <font-awesome-icon icon="fa-solid fa-person-digging" class="text-gray-400"/>
        </div>
        <span v-if="!toggle">Projects</span>
        <font-awesome-icon v-if="!toggle" icon="fa-solid fa-angle-right" />
      </div>
      <div :class="linkTransform" class="hover:bg-slate-500 text-sm">
        <div :class="linkIconTransform">
          <font-awesome-icon icon="fa-solid fa-person-chalkboard" class="text-gray-400"/>
        </div>
        <span v-if="!toggle">Trainings/Capbuild</span>
        <font-awesome-icon v-if="!toggle" icon="fa-solid fa-angle-right" />
      </div>
      <div :class="linkTransform" class="hover:bg-slate-500 text-sm">
        <div :class="linkIconTransform">
          <font-awesome-icon icon="fa-solid fa-people-carry-box" class="text-gray-400"/>
        </div>
        <span v-if="!toggle">Grant Utilization</span>
        <font-awesome-icon v-if="!toggle" icon="fa-solid fa-angle-right" />
      </div>
    </div>
  </aside>

  <RouterView />
</template>

<script setup>
import { ref, computed } from 'vue'
import { RouterLink, RouterView } from 'vue-router'


const toggle = ref(false)

const sideBarToggle = () => {
  toggle.value = !toggle.value
}

const navBarTransform = computed(() => {
  return toggle.value ? 'pl-[70px]' : 'pl-[310px]'
})

const mainTransform = computed(() => {
  return toggle.value ? 'pl-[70px]' : 'pl-[300px]'
})

const sideBarTransform = computed(() => {
  return toggle.value ? 'w-[80px] px-0' : 'w-[300px] px-5'
})

const linkTransform = computed(() => {
  return toggle.value 
      ? 'flex justify-center items-center px-2 py-2 relative' 
      : 'py-2 flex justify-between items-center font-semibold px-2 pl-[40px] relative'
})

const linkIconTransform = computed(() => {
  return toggle.value 
    ? ''
    : 'h-[30px] w-[30px] flex items-center justify-center absolute left-0 top-1'
})

const onClickStatus = () => {
  console.log('test')
}


</script>
