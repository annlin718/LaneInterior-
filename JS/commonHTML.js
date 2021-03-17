var sHTML = `<div id="divMenu" class="flex_bottom">
            <nav class="menu">
                <p>街巷設計製作</p>
                <dl>
                    <dt onclick="goLink('index.html')">Project&nbsp;&nbsp;</dt>
                    <hr align="left">
                    <dd onclick="goLink('Page.html?Hinoki')">Hinoki Style House</dd>
                    <dd onclick="goLink('Page.html?PureOffice')">Pure Office</dd>
                </dl>

                <dl>
                    <dt>About me</dt>
                    <hr align="left">
                    <dd>About</dd>
                </dl>

                <dl>
                    <dt onclick="goLink('Contact.html')">Contact</dt>
                </dl>
            </nav>
        </div>
        
        <div id="divMenu_m">
            <img onclick="goLink('index.html')" id="picLogo" src="" />
            <div id="div_Menu_Btn_m" onclick="MenuExpand()">
                <hr class="divMenu_hr_m" />
                <hr class="divMenu_hr_m divMenu_hr_m2" />
                <hr class="divMenu_hr_m" />
            </div>
        </div>`

document.write(sHTML);