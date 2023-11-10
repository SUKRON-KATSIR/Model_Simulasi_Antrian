<template>
    <!-- ========== Left Sidebar Start ========== -->
    <div class="vertical-menu">
        <div data-simplebar class="h-100">
          <!--- Sidemenu -->
          <div id="sidebar-menu">
            <!-- Left Menu Start -->
            <ul class="metismenu list-unstyled" id="side-menu">
              <li class="menu-title" key="t-menu">Main</li>

              <li :class="$route.name === 'Home' ? 'mm-active' : ''">
                <RouterLink to="/">
                  <i class="bx bx-home"></i>
                  <span key="t-dashboards">Dashboard</span>
                </RouterLink>
              </li>
              <li class="menu-title" key="t-apps">Proses</li>

              <li :class="$route.name ==='Data' ? 'mm-active' : ''">
                <RouterLink to="/data" class="waves-effect">
                  <i class="  bx bx-data"></i>
                  <!-- <i class="bx bx-git-branch"></i> -->
                  <span key="t-data">Input Data</span>
                </RouterLink>
              </li>
            </ul>
          </div>
          <!-- Sidebar -->
        </div>
      </div>
      <!-- Left Sidebar End -->
</template>