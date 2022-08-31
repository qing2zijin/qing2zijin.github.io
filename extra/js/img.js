/*<img data-src="真实图片地址" alt="7" src="/links/second/ssslazyload.gif">
	 技术来源于https://www.cnblogs.com/panwudi/p/16076379.html
	*/
const imgs = document.getElementsByTagName('img')	 // 获取所有的图片标签 
const viewHeight = window.innerHeight || document.documentElement.clientHeight 		// 获取可视区域的高度
let num = 0
function lazyload(){
	for(let i=num; i<imgs.length; i++) {
		let distance = viewHeight - imgs[i].getBoundingClientRect().top 	// 用可视区域高度减去元素顶部距离可视区域顶部的高度
		 
		if(distance >= 0 ){ 	// 如果可视区域高度大于等于元素顶部距离可视区域顶部的高度，说明元素露出
			if (imgs[i].hasAttribute('data-src') ){ 		//*判断标签data-src存在的前提
				imgs[i].src = imgs[i].getAttribute('data-src') 		// 给元素写入真实的src，展示图片
			}
			num = i + 1 	// 前i张图片已经加载完毕，下次从第i+1张开始检查是否露出
		}
	}
}
// 监听Scroll事件
window.addEventListener('scroll', lazyload, false);