<script lang="ts">
declare const document: any;
declare const $:any;
declare const feahter:any;
</script>
<script setup lang="ts">
import { RouterLink } from 'vue-router';
import Header from './Header.vue';
import Sidebar from './Sidebar.vue';
import Footer from './Footer.vue';

</script>
<template>
  <div id="layout-wrapper">
    <Header/>
    <Sidebar/>
      <!-- ============================================================== -->
      <!-- Start right Content here -->
      <!-- ============================================================== -->
      <div class="main-content">
        <div class="page-content">
          <div class="container-fluid">
            <!-- start page title -->
            <slot></slot>
            <!-- end page title -->
          </div>
          <!-- container-fluid -->
        </div>
        <!-- End Page-content -->

        <Footer/>
      </div>
      <!-- end main content-->
    </div>
</template>