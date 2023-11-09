<template>
  <Parent>
    <div class="row">
      <div class="col-12">
        <div class="page-title-box d-sm-flex align-items-center justify-content-between">
          <h4 class="mb-sm-0 font-size-18">Dashboard</h4>
          <div class="page-title-right">Main / Dashboard</div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xl-12">
        <div class="card">
          <div>
            <div class="row">
              <div class="col-lg-9 col-sm-8">
                <div class="p-4">
                  <h5 class="text-primary">Selamat Datang !</h5>
                  <p>Aplikasi menghitung antrian</p>

                  <div class="text-muted">
                    <p class="mb-1"><i class="mdi mdi-circle-medium align-middle text-primary me-1"></i> Model Simulasi 2023</p>
                    <!-- <p class="mb-1"><i class="mdi mdi-circle-medium align-middle text-primary me-1"></i> </p> -->
                    <p class="mb-0"><i class="mdi mdi-circle-medium align-middle text-primary me-1"></i> Sukron Katsir </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-4 align-self-center">
                <div>
                  <img src="/images/crypto/features-img/img-1.png" alt="" class="img-fluid d-block">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Parent>
</template>

<script setup lang="ts">
import Parent from './Parent.vue';
</script>