<template>
    <header id="page-topbar" class="bg-warning">
        <div class="navbar-header">
            <div class="d-flex">
                <!-- LOGO -->
                <div class="navbar-brand-box">
                    <a href="index.html" class="logo logo-dark">
                        <span class="logo-sm">
                            <img src="/images/logo.svg" alt="" height="22" />
                        </span>
                        <span class="logo-lg">
                            <img src="/images/logo-dark.png" alt="" height="17" />
                        </span>
                    </a>

                    <a href="index.html" class="logo logo-light">
                        <span class="logo-sm">
                            <img src="/images/logo-light.svg" alt="" height="22" />
                        </span>
                        <span class="logo-lg">
                            <img src="/images/logo-light.png" alt="" height="19" />
                        </span>
                    </a>
                </div>

                <button type="button" class="btn btn-sm px-3 font-size-16 header-item waves-effect text-white"
                    onclick="toogleShow()">
                    <i class="fa fa-fw fa-bars"></i>
                </button>
            </div>
            <div class="d-flex">
                <div class="dropdown d-inline-block d-lg-none ms-2">
                    <button type="button" class="btn header-item noti-icon waves-effect"
                        id="page-header-search-dropdown" data-bs-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                        <i class="mdi mdi-magnify"></i>
                    </button>
                    <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                        aria-labelledby="page-header-search-dropdown">
                        <form class="p-3">
                            <div class="form-group m-0">
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Search ..."
                                        aria-label="Recipient's username" />
                                    <div class="input-group-append">
                                        <button class="btn btn-primary" type="submit">
                                            <i class="mdi mdi-magnify"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="dropdown d-inline-block">
                    <button type="button" class="btn header-item waves-effect" id="page-header-user-dropdown"
                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img class="rounded-circle header-profile-user" src="/images/users/avatar-1.png"
                            alt="Header Avatar" />
                        <span class="d-none d-xl-inline-block ms-1 text-white" key="t-henry">Sukron Katsir</span>
                    </button>
                </div>
            </div>
        </div>
    </header>

</template>