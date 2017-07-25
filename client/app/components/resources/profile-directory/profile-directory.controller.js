class ProfileDirectoryController {
    constructor($scope, profileDirectoryService, importFontService) {
        // var this = this;
        this.name = 'profile-directory';
        this.service = profileDirectoryService;
        this.importFontService = importFontService;
        this.$scope = $scope;
    }

    $onInit() {
        this.info = {
            name: 'profile directory',
            name_plural: 'profile directories',
            url: 'http://fav.me/d73p9tr',
            description: 'Make a directory for your profile.',
            title: 'Profile Directory Creator',
        }

        // this.tooltips = TooltipService.getTooltips();
        this.tabs = this.service.getTabs();
        this.j = this.service.setUpJournal();
        this.password = "";
        this.isLocked = true;
        this.checkit();
        this.$scope.$watch("j", this.checkit, true);
        // this.$watch("j", this.checkit, true); // IMPORTANT
    }

    // Adds a button
    addButton() {
        this.j.buttons.push(this.service.newButton());
    }

    deleteButton(index) {
        this.j.buttons.splice(index, 1);
    }

    addStatusButton() {
        this.j.statusButtons.push(this.service.newStatusButton());
    }

    deleteStatusButton(index) {
        this.j.statusButtons.splice(index, 1);
    }

    getCompleteCss(css) {
        var completeCss = '';
        completeCss += this.importFontService.importFonts([this.j.buttonFontFamily]) + '\n\n';
        completeCss += '#preview_box a{font-weight:400;}';
        completeCss += css;
        completeCss += '.gr-box a{text-decoration:none;} .status .description{max-width:800px;}';
        completeCss += '.daInside{background:url("' + this.j.customBackground + '") no-repeat;';
        return '<style>' + completeCss + '</style>';
    }

    checkit() {
        console.log("checking this");
        return () => {

            // Generate codes
            var userHtml = this.service.getUserHtml(this.j);
            var userCss = this.service.getUserCss(this.j);

            // Change preview HTML and CSS
            this.completeCss = this.getCompleteCss(userCss);
            this.completeHtml = userHtml;

            // Show user codes if unlocked
            if (!this.isLocked) {
                this.userCss = userCss;
                this.userHtml = userHtml;
                this.userWidgetHtml = '<div class="popup2-moremenu"><div class="floaty-boat"><br><img src="' + this.j.customBackground + '"></div></div><div class="gr-box gr-genericbox">';
            }
        }

    }
}

export default ProfileDirectoryController;
