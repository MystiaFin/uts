(function($) {
    $.fn.createSidebar = function() {
        const sidebarHtml = `
            <nav class="sidebar">
                <div class="logo">
                    Logo
                </div>
                <div class="menu">
                    <ul>
                        <li><a href="/home"><img src="/assets/navigations/home.svg"/>Home</a></li>
                        <li><a href="../menu/menu/"><img src="/assets/navigations/menu.svg"/>Menu</a></li>
                        <li><a href="#"><img src="/assets/navigations/order.svg"/>Orders</a></li>
                        <li><a href="#"><img src="/assets/navigations/checkouts.svg"/>Checkouts</a></li>
                        <li><a href="#"><img src="/assets/navigations/settings.svg"/>Settings</a></li>
                    </ul>
                </div>
            </nav>`;
        
        this.html(sidebarHtml);
        return this;
    };
})(jQuery);
