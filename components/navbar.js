class Navbar {
    constructor(options) {
      this.options = {
        logoText: 'Logo',
        menuItems: [
          { text: 'Home', icon: '/assets/navigations/home.svg', href: '#' },
          { text: 'Menu', icon: '/assets/navigations/menu.svg', href: '#' },
          { text: 'Orders', icon: '/assets/navigations/order.svg', href: '#' },
          { text: 'Checkouts', icon: '/assets/navigations/checkouts.svg', href: '#' },
          { text: 'Settings', icon: '/assets/navigations/settings.svg', href: '#' }
        ],
        ...options
      };
      this.$el = null;
    }
  
    render() {
      this.$el = $('<nav>').addClass('sidebar');
      
      const $logo = $('<div>').addClass('logo').text(this.options.logoText);
      this.$el.append($logo);
  
      const $menu = $('<div>').addClass('menu');
      const $ul = $('<ul>');
  
      this.options.menuItems.forEach(item => {
        const $li = $('<li>');
        const $a = $('<a>').attr('href', item.href);
        const $img = $('<img>').attr('src', item.icon);
        $a.append($img).append(item.text);
        $li.append($a);
        $ul.append($li);
      });
  
      $menu.append($ul);
      this.$el.append($menu);
  
      return this.$el;
    }
  
    mount($parent) {
      $parent.append(this.render());
    }
  
    setActive(index) {
      this.$el.find('li').removeClass('active');
      this.$el.find('li').eq(index).addClass('active');
    }
  }
  
  // Usage
  $(document).ready(function() {
    const navbar = new Navbar({
      logoText: 'RedPOS'
    });
    navbar.mount($('body'));
  
    // Set the first item as active
    navbar.setActive(0);
  });