class PopupController {
    constructor() {
        this.name = 'popup';
    }

    hidePopup() {
        $("#popup").fadeOut(100);
    }

    // Check password
    checkPassword() {
        $("#passwordMessage").fadeOut(100);

        if ($scope.password == undefined) {
            $scope.password = '';
        }
        var pass = $scope.password.toLowerCase().trim();

        $.ajax({
            url: $scope.root + 'php/checkPassword.php',
            type: 'get',
            data: {password: pass},
            success: this.handlePasswordCheck,
            error: function(xhr, desc, err) {
                console.log(xhr);
                console.log("Details: " + desc + "\nError:" + err);
            }
        });
    }

    // Handle response from checkPassword
    _handlePasswordCheck(res) {
        var passMsg = "Incorrect password!";
        var termMsg = "Please agree to the terms of use!";

        if (res == "false") { // Wrong password
            $scope.passwordMessage = passMsg;
            $("#passwordMessage").fadeIn(100);
        }
        else if (!$scope.terms) { // Terms not checked
            $scope.passwordMessage = termMsg;
            $("#passwordMessage").fadeIn(100);
        }
        else { // All correct
            $("#slide1").fadeOut(0);
            $("#slide2").fadeIn(200);
            $scope.isLocked = false;
            $scope.checkit();
        }
        $scope.$apply();
    }
}

export default PopupController;
