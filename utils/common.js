// 全局弹窗
export function roast(title,icontype){
	return uni.showToast({
		title: title,
		mask: false,
		icon:icontype,
		duration :1500
	});
}
// 通用方法
export function dealNum(v) {
	if (String(v).length > 8) {
		return parseFloat((v / 100000000).toFixed(2))+ '亿'
	} else if (String(v).length > 4) {
		return parseFloat((v / 10000).toFixed(2)) + '万'
	} else {
		return v
	}
}
	
export function dealSize(v) {
	if (String(v).length > 8) {
		return parseFloat((v / 100000000).toFixed(2))+ 'GB'
	} else if (String(v).length > 4) {
		return parseFloat((v / 10000).toFixed(2)) + 'MB'
	} else {
		return v+"KB"
	}
}

export function checkPhone(v){
	var reg = new RegExp(/^1[34578]\d{9}$/)
	return reg.test(v)
}

export function checkPw(v){
	var pattern = /^[\w_-]{6,16}$/;
	return pattern.test(v)
}
