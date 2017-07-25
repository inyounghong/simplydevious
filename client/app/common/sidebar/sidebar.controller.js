class SidebarController {
    constructor() {
        this.name = 'sidebar';
    }
    $onInit() {
        this.selectedTab = this.tabs[0];
    }
    changeTab(tab) {
        this.selectedTab = tab;
    }
    isSelected(tab) {
        return this.selectedTab == tab;
    }
}

// SidebarController.$inject = [
//     '$scope',
// ];

export default SidebarController;
