



function roundedImage(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
}

$('.image_upload').change(function(event){
    var file=this.files[0];

    var haha = resizeableImage($('.resize-image')) ;

    var reader=new FileReader();
    reader.onload=function(){
        $(".resize-image").attr("src", reader.result);
        haha.resetImage(reader.result);
    };
    reader.readAsDataURL(file);


});