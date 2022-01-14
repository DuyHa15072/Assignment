const Header = {
    render() {
        return /* html */ `
            <div class="header_top bg-[#272f54] py-[13px]">
                    <a href=""><img src="https://i.imgur.com/5EK1lFm.png" alt="" class="m-auto"></a>
                </div>
                <div class="header-main flex  bg-[#ca7802]">
                    <nav class="menu-item">
                        <ul class="flex ml-2">
                            <li class="mx-[15px] my-[10px] text-white "><a href="/" class="hover:border-b-[1px] border-white">Trang chủ</a></li>
                            <li class="mx-[15px] my-[10px] text-white "><a href="/about" class="hover:border-b-[1px] border-white">About pages</a></li>
                            <li class="mx-[15px] my-[10px] text-white "><a href="/news" class="hover:border-b-[1px] border-white">News pages</a></li>
                            <li class="mx-[15px] my-[10px] text-white "><a href="/signin" class="hover:border-b-[1px] border-white">Sign in</a></li>
                            <li class="mx-[15px] my-[10px] text-white "><a href="/signup" class="hover:border-b-[1px] border-white">Sign up</a></li>
                            <li class="mx-[15px] my-[10px] text-white "><a href="/admin/dashboard" class="hover:border-b-[1px] border-white">Admin</a></li>
                        </ul>
                    </nav>
                    <div class="search m-auto">
                        <form action="">
                            <input type="text" class="px-[10px] rounded-[1px]">
                            <input type="submit" value="Tìm kiếm" class="bg-[#252f4f] ml-[10px] px-[15px] py-[2px] text-white text-[14px] ">
                        </form>
                    </div>
                </div>
       `;
    },
};
export default Header;