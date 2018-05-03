document.addEventListener('turbolinks:load', function() {


let result = document.querySelector('.result'),
img_result = document.querySelector('.img-result'),
img_w = document.querySelector('.img-w'),
img_h = document.querySelector('.img-h'),
options = document.querySelector('.options'),
save = document.querySelector('.save'),
cropped = document.querySelector('.cropped'),
dwn = document.querySelector('.download'),
post_picture = document.querySelector('#post_picture'),
file_input = document.querySelector('#file-input'),

cropper = '';



// on change show image with crop options
file_input.addEventListener('change', (e) => {
  if (e.target.files.length) {

    const reader = new FileReader();
    reader.onload = (e)=> {
      if(e.target.result){

        var files = document.getElementById("file-input").files;
        document.getElementById("post_filename").value = files[0].name

				let img = document.createElement('img');
				img.id = 'image';
				img.src = e.target.result

				result.innerHTML = '';

        result.appendChild(img);

				save.classList.remove('hide');
				options.classList.remove('hide');

				cropper = new Cropper(img);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  }
});

// save on click
save.addEventListener('click',(e)=>{
  e.preventDefault();

  let base64_img = cropper.getCroppedCanvas({
		width: img_w.value
	}).toDataURL();





	// cut the first section "data:image/png;base64,<encoded data>"
	//matches = base64_img.match(/^data:(.*);base64,(.*)/);
	//type = matches[1]
	//data = matches[2]
	//data_len = data.length

  //var u8a = new Uint8Array(data_len);
  //for (var i = 0; i < data_len; i++) {
  //  u8a[i] = data.charCodeAt(i);
  //}
  //var blob = new Blob([u8a.buffer], {type: type});
	//var my_form = document.getElementById("my_form");
	//var form_data = new FormData(my_form);
	//formData.append("name", blob);




	post_picture.setAttribute('value', base64_img)
  cropped.classList.remove('hide');
	img_result.classList.remove('hide');

  cropped.src = base64_img;
  dwn.classList.remove('hide');
  dwn.download = 'imagename.png';
  dwn.setAttribute('href', base64_img);
});


});
