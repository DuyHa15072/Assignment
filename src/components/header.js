const Header = {
    render() {
        return /*html*/ `
         <div class="header_top bg-[#272f54] py-[13px]">
                <a href=""><img src="./img/logo.png" alt="" class="m-auto"></a>
            </div>
            <div class="header-main flex  bg-[#ca7802]">
                <nav class="menu-item">
                    <ul class="flex ml-2">
                        <li class="mx-[15px] my-[10px] text-white "><a href="/" class="hover:border-b-[1px] border-white">Trang chủ</a></li>
                        <li class="mx-[15px] my-[10px] text-white "><a href="/about" class="hover:border-b-[1px] border-white">Tuyển sinh</a></li>
                        <li class="mx-[15px] my-[10px] text-white "><a href="/product" class="hover:border-b-[1px] border-white">Trương trình đào tạo</a></li>
                        <li class="mx-[15px] my-[10px] text-white "><a href="/contact" class="hover:border-b-[1px] border-white">Góc sinh viên</a></li>
                        <li class="mx-[15px] my-[10px] text-white "><a href="" class="hover:border-b-[1px] border-white">Tuyển dụng</a></li>
                    </ul>
                </nav>
                <div class="search m-auto">
                    <form action="">
                        <input type="text" class="px-[10px] rounded-[1px]">
                        <input type="submit" value="Tìm kiếm" class="bg-[#252f4f] ml-[10px] px-[15px] py-[2px] text-white text-[14px] ">
                    </form>
                </div>
            </div>
       `
    },
};
export default Header;