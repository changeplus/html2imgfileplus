import html2canvas from "html2canvas";

export default {
    doSm(EI, callbackDo){
        // 手动创建一个 canvas 标签
        const canvas = document.createElement("canvas")
        // 获取父标签，意思是这个标签内的 DOM 元素生成图片
        // imageTofile是给截图范围内的父级元素自定义的ref名称
        let canvasBox = EI
        // 获取父级的宽高
        const width = parseInt(window.getComputedStyle(canvasBox).width)
        const height = parseInt(window.getComputedStyle(canvasBox).height)
        // 宽高 * 2 并放大 2 倍 是为了防止图片模糊
        canvas.width = width * 2
        canvas.height = height * 2
        canvas.style.width = width + 'px'
        canvas.style.height = height + 'px'
        const context = canvas.getContext("2d");
        context.scale(2, 2);
        const options = {
            backgroundColor: null,
            canvas: canvas,
            useCORS: true
        }
        html2canvas(canvasBox, options).then((canvas) => {
            // toDataURL 图片格式转成 base64
            let dataURL = canvas.toDataURL("image/png");
            let fileout = this.dataURLtoFile(dataURL, "screenshot.png");
            let resultObj = {
                file: fileout,
                url: dataURL,
            };
            callbackDo(resultObj);
        })
    },

    dataURLtoFile(dataurl, filename) {
        var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, { type: mime });
    }

}
