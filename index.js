$(function () {
    $("#accordion").accordion({
        collapsible: true,
        heightStyle: "content",
    });
});

$(".days").countdown("2024/10/23", function (event) {
    $(".days").html(event.strftime("%-D يوم"));
    $(".hours").html(event.strftime("%H ساعة"));
    $(".minutes").html(event.strftime("%M دقيقة"));
    $(".seconds").html(event.strftime("%S ثانية"));
});

// Initialize the sidebar
$(".sidebar.left").sidebar({ side: "left" });

// Event to close the sidebar on button click
$("#toggleBtn").on("click", (e) => {
    if ($(".sidebar.left").hasClass("sidebar-open")) {
        $(".sidebar.left").trigger("sidebar:close");
        $(".sidebar.left").removeClass("sidebar-open");
        $("#toggleBtn").html(` <i class="fa-solid fa-bars"></i> Menu`);
    } else {
        $(".sidebar.left").trigger("sidebar:open");
        $(".sidebar.left").addClass("sidebar-open");
        $("#toggleBtn").html("Close");
    }
});

$(".my-sidebar").on("sidebar:opened", function () {
});

$(".my-sidebar").on("sidebar:closed", function () {
    // Do something on close
});

$("#msg").textcounter({
    type: "character",
    max: 150,
    stopInputAtMaximum: true,
    countDownText               : " عدد الحروف المتبقية: %d",
    maximumErrorText            : "كفاية لحد كده",
    displayErrorText            : true, 
    countDown                   : true,
    countOverflowContainerClass : "text-count-overflow-wrapper ",
    countContainerClass         : "text-count-wrapper kufam mt-3 fs-5", 
    textCountClass              : "text-count-message text-danger",
});
