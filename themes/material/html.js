var bodyContent = `
<header class="mdui-appbar mdui-color-theme"> 
   <div id="nav" class="mdui-toolbar mdui-container"> 
   </div> 
</header>
<div id="content" class="mdui-container"> 
</div>
`

var navContent = `
<img src="//cdn.jsdelivr.net/gh/jiujiangluck/gd/themes/logo.png" alt="GoPan">
<a href="/" class="mdui-typo-headline folder">
	{0}
</a>
`

var navItem = `
<i class="mdui-icon material-icons mdui-icon-dark folder" style="margin:0;">chevron_right</i>
<a class="folder" href="{0}">{1}</a>`;

var mainContent = `
<div id="head_md" class="mdui-typo" style="display:none;padding: 20px 0;">
</div>
<div class="mdui-row"> 
    <ul class="mdui-list"> 
        <li class="mdui-list-item th"> 
            <div class="mdui-col-xs-12 mdui-col-sm-7">
                文件
                <i class="mdui-icon material-icons icon-sort" data-sort="name" data-order="more">expand_more</i>
            </div> 
            <div class="mdui-col-sm-3 mdui-text-right">
                修改时间
                <i class="mdui-icon material-icons icon-sort" data-sort="date" data-order="downward">expand_more</i>
            </div> 
            <div class="mdui-col-sm-2 mdui-text-right">
                大小
                <i class="mdui-icon material-icons icon-sort" data-sort="size" data-order="downward">expand_more</i>
            </div> 
        </li> 
    </ul> 
</div> 
<div class="mdui-row"> 
    <ul id="list" class="mdui-list"> 
    </ul> 
</div>
<div id="readme_md" class="mdui-typo" style="display:none; padding: 20px 0;">
</div>
`

var floderItem = `
<li class="mdui-list-item mdui-ripple">
    <a href="{0}" class="folder">
        <div class="mdui-col-xs-12 mdui-col-sm-7 mdui-text-truncate">
            <i class="mdui-icon material-icons">folder_open</i>
            {1}
        </div>
        <div class="mdui-col-sm-3 mdui-text-right">{2}
        </div>
        <div class="mdui-col-sm-2 mdui-text-right">{3}
        </div>
    </a>
</li>
`

var fileItem = `
<li class="mdui-list-item file mdui-ripple" target="_blank">
    <a gd-type="{0}" href="{1}" class="{2}">
        <div class="mdui-col-xs-12 mdui-col-sm-7 mdui-text-truncate">
            <i class="mdui-icon material-icons">insert_drive_file</i>
            {3}
        </div>
        <div class="mdui-col-sm-3 mdui-text-right">{4}
        </div>
        <div class="mdui-col-sm-2 mdui-text-right">{5}
        </div>
    </a>
</li>
`

var progress = `
<div class="mdui-progress"><div class="mdui-progress-indeterminate"></div></div>
`

var textContent = `
<script src="https://cdn.staticfile.org/ace/1.4.7/ace.js"></script>
<script src="https://cdn.staticfile.org/ace/1.4.7/ext-language_tools.js"></script>
<div class="mdui-container">
    <pre id="editor" >
    </pre>
</div>
<div class="mdui-textfield">
	<label class="mdui-textfield-label">下载地址</label>
	<input class="mdui-textfield-input" type="text" value="{url}"/>
</div>
<a href="{url}" class="mdui-fab mdui-fab-fixed mdui-ripple mdui-color-theme-accent">
    <i class="mdui-icon material-icons">file_download</i>
</a>
`

var mediaArr = {
    "audio":`<audio class="mdui-center" preload controls><source src="{url}"></audio>`,
    "video":`<video class="mdui-video-fluid mdui-center" preload controls><source src="{url}"></video>`,
    "image":`<img class="mdui-img-fluid mdui-center" src="{url}"/>`
}

var mediaContent = `
<div class="mdui-container-fluid">
    <br>
    {mediaItem}
    <br>{playBtn}
	<!-- fixed tag -->
	<div class="mdui-textfield">
	  <label class="mdui-textfield-label">下载地址</label>
	  <input class="mdui-textfield-input" type="text" value="{url}"/>
	</div>
	<div class="mdui-textfield">
	  <label class="mdui-textfield-label">HTML 引用地址</label>
	  <textarea class="mdui-textfield-input">{mediaItem}</textarea>
    </div>
    <div class="mdui-textfield" style="display:{display}">
	  <label class="mdui-textfield-label">Markdown 引用地址</label>
	  <textarea class="mdui-textfield-input">![]({url})</textarea>
	</div>
</div>
<a href="{url}" class="mdui-fab mdui-fab-fixed mdui-ripple mdui-color-theme-accent"><i class="mdui-icon material-icons">file_download</i></a>
`