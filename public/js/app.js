function toogleShow() {
    const element = document.getElementsByTagName('body')[0];
    element.classList.toggle('sidebar-enable') ? element.classList.add('vertical-collpsed') : element.classList.remove('vertical-collpsed');
}