<script setup>

const clickMenuOption = () => {
  if (window.getComputedStyle(buttonSidebarExpand.value).display !== "none") {
    buttonSidebarExpand.value.click()
  }
}

</script>

<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark sticky-top flex-md-nowrap p-0 shadow">
  <div class="container-fluid">
    <router-link class="navbar-brand col-md-3 col-lg-2 me-0 px-3" :to="{ name: 'home' }" @click="clickMenuOption">
      <img src="@/assets/logo.png" alt="" width="30" height="30" class="d-inline-block align-text-top" />
      Weather Information
    </router-link>

      <div class="collapse navbar-collapse justify-content-end">
      <ul class="navbar-nav">
        <!-- <li class="nav-item" v-show="!userStore.user">
            <router-link class="nav-link"
              :class="{ active: $route.name == 'Register' && $route.params.id == userStore.userId }"
              :to="{ name: 'Register', params: { id: userStore.userId } }" @click="clickMenuOption">
              <i class="bi bi-person-check-fill"></i>
                                                            Register
              </router-link>
            </li> -->
        <!-- <li class="nav-item" v-show="!userStore.user">
              <router-link class="nav-link" :class="{ active: $route.name === 'Login' }" :to="{ name: 'Login' }"
                @click="clickMenuOption">
                <i class="bi bi-box-arrow-in-right"></i>
                Login
              </router-link>
            </li> -->
        <!-- <li class="nav-item dropdown" v-show="userStore.user">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
              data-bs-toggle="dropdown" aria-expanded="false">
              <img :src="userStore.userPhotoUrl" class="rounded-circle z-depth-0 avatar-img" alt="avatar image" />
              <span class="avatar-text">{{ userStore.user?.name ?? "Anonymous" }}</span>
            </a>
            <ul class="dropdown-menu dropdown-menu-dark dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
              <li>
                <router-link class="dropdown-item"
                  :class="{ active: $route.name == 'User' && $route.params.id == userStore.userId }"
                  :to="{ name: 'User', params: { id: userStore.userId } }" @click="clickMenuOption">
                  <i class="bi bi-person-square"></i>Profile
                </router-link>
              </li>
              <li>
                <router-link class="dropdown-item" :class="{ active: $route.name === 'ChangePassword' }"
                  :to="{ name: 'ChangePassword' }" @click="clickMenuOption">
                  <i class="bi bi-key-fill"></i>
                  Change password
                </router-link>
              </li>
                                                          <li>
                                                            <hr class="dropdown-divider" />
                                                          </li>
                                                          <li>
                                                            <a class="dropdown-item" @click.prevent="logout">
                                                              <i class="bi bi-arrow-right"></i>Logout
                                                            </a>
                                                          </li>
                                                        </ul>
                                                      </li> -->
        </ul>
      </div>
    </div>
  </nav>


  <router-view></router-view>
</template>

<style>
@import "./assets/dashboard.css";

.avatar-img {
  margin: -1.2rem 0.8rem -2rem 0.8rem;
  width: 3.3rem;
  height: 3.3rem;
}

.avatar-text {
  line-height: 2.2rem;
  margin: 1rem 0.5rem -2rem 0;
  padding-top: 1rem;
}

.dropdown-item {
  font-size: 0.875rem;
}

.btn:focus {
  outline: none;
  box-shadow: none;
}

#sidebarMenu {
  overflow-y: auto;
}

#orderBtn {
  background-color: #505050;
  position: absolute;
  left: 0;
  bottom: 0;
}
</style>